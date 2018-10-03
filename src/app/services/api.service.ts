import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
// import {
//     CargaLanzamientos,
//     CargaEstados,
//     CargaAgencias,
//     CargaMisiones
// } from './global-store.actions';
// import { GlobalStore, GlobalSlideTypes } from './global-store.state';
import { ModoBusqueda } from '../shared/criterion/criterion-modo';


@Injectable()
export class ApiService {
  constructor(private httpC: HttpClient) { }

  // public getAgencies () {
  //   const agencies = this.global.getSnapShot(GlobalSlideTypes.agencias);
  //   if (agencies.length > 0) {
  //     this.global.dispatch(new CargaAgencias([...agencies]));
  //   } else {
  //     this.httpC
  //     .get('../../assets/launchagencies.json')
  //     .pipe(map((res: any) => res.agencies))
  //     .subscribe(a => this.global.dispatch(new CargaAgencias(a)));
  //     }
  //   }
  private agencias: any[];
  private estados: any[];
  private misiones: any[];
  private lanzamientos: any[];

  public getAgencies(): Observable<any[]> {
    if (this.agencias) { return of(this.agencias); }

    return this.httpC.get('../../assets/launchagencies.json')
              .pipe(map((res: any) => res.agencies)
                // map((res: any) => (<any[]>res.agencies).sort((a: any, b: any) => a.name.localeCompare(b.name))),
                // tap((res) => this.agencias = res)
              );
  }

  // public getMissionsTypes () {
  //   const missions = this.global.getSnapShot(GlobalSlideTypes.misiones);
  //   if (missions.length > 0) {
  //     this.global.dispatch(new CargaMisiones([...missions]));
  //   } else {
  //     this.httpC
  //     .get('../../assets/launchmissions.json')
  //     .pipe(map((res: any) => res.types))
  //     .subscribe(m => this.global.dispatch(new CargaMisiones(m)));
  //   }
  // }

  public getMissionsTypes(): Observable<any[]> {
    if (this.misiones) { return of(this.misiones); }

    // return this.httpC.get('../../assets/launchmissions.json')
    //           .pipe(map((res: any) => res.misiones)
    //             // map((res: any) => (<any[]>res.agencies).sort((a: any, b: any) => a.name.localeCompare(b.name))),
    //             // tap((res) => this.agencias = res)
    //           );
    return this.httpC.get('../../assets/launchmissions.json')
              .pipe(
                map((res: any) => (<any[]>res.types).sort((a: any, b: any) => a.name.localeCompare(b.name))),
                tap((res) => this.misiones = res)
              );
  }


  // public getStatusTypes() {
  //   const states = this.global.getSnapShot(GlobalSlideTypes.estados);
  //   if (states.length > 0) {
  //     this.global.dispatch(new CargaEstados([...states]));
  //   } else {
  //     this.httpC
  //     .get('../../assets/launchstatus.json')
  //     .pipe(map((res: any) => res.types))
  //     .subscribe(statuses => this.global.dispatch(new CargaEstados(statuses)));
  //   }
  // }

  public getStatusTypes(): Observable<any[]> {
    if (this.estados) { return of(this.estados); }

    return this.httpC.get('../../assets/launchstatus.json')
              .pipe(
                map((res: any) => (<any[]>res.types).sort((a: any, b: any) => a.name.localeCompare(b.name))),
                tap((res) => this.estados = res)
              );
  }

  public getCriteria(criterio: ModoBusqueda) {
    switch (criterio) {
      case 1 : // 'Estado':
        this.getStatusTypes();
        break;
      case 2: // 'Agencia':
        this.getAgencies();
        break;
      case 3: // 'Tipo':
        this.getMissionsTypes();
        break;
    }
    // // una vez seleccionado el criterio debemos limpiar los lanzamientos listados por el criterio anterior
    // this.global.dispatch(new CargaLanzamientos([]));
  }

  // public getFilterLaunches(criterio: ModoBusqueda, valor) {
  //   if (valor === 0) {
  //     this.global.dispatch(new CargaLanzamientos([]));
  //   } else {
  //     this.httpC
  //     .get('../../assets/launchlibrary.json')
  //     .pipe(map((res: any) =>
  //         res.launches.filter(lan => {
  //           switch (criterio) {
  //             case 1: // 'Estado':
  //               return this.filtraEstados(lan, Number(valor));
  //             case 2: // 'Agencia':
  //               return this.filtraAgencias(lan, Number(valor));
  //             case 3: // 'Tipo mision':
  //               return this.filtraMisiones(lan, Number(valor));
  //             default:
  //               return [];
  //           }
  //         })
  //       )
  //     ).subscribe((lanzamientos: any) => {
  //       this.global.dispatch(new CargaLanzamientos(lanzamientos));
  //     });
  //   }
  // }

  private getLaunches(): Observable<any[]> {
    if (this.lanzamientos) { return of(this.lanzamientos); }
    return this.httpC.get('../../assets/launchlibrary.json')
              .pipe(
                map((res: any) => res.launches),
                tap((res) => this.lanzamientos = res)
              );
  }

  public getFilterLaunches(criterio: ModoBusqueda, valor?: number): Observable<any[]> {
    if (valor !== null) {
      switch (criterio) {
        case 1: // Estado
          return this.getLaunches()
              .pipe(
                    map(launches => launches.filter( launch => launch.status === valor )));
          // .sort(this.sortLaunches)));
        case 2: // Agencia
          return this.getLaunches()
              .pipe(
                    map(launches => launches
                        .filter(
                              launch => launch.missions !== null &&
                              launch.missions
                                .some(mission => mission.agencies !== null && mission.agencies.some( agency => agency.id === valor )))));
                        // .sort(this.sortLaunches)));
        case 3: // Tipo de mision
          return this.getLaunches()
              .pipe(
                    map(launches => launches
                        .filter( launch => launch.missions != null && launch.missions.some(mission => mission.type === valor ))));
                        // .sort(this.sortLaunches)));
      }
    } else {
      return of([]);
    }
  }


  // private filtraEstados(lanzamiento: any, valor: number): boolean {
  //   return (lanzamiento.status === valor);
  // }
  // private filtraAgencias(lanzamiento: any, valor: number): boolean {
  //     let res: boolean;
  //     res = false;
  //     if (lanzamiento.rocket !== undefined && lanzamiento.rocket !== null) {
  //       if (lanzamiento.rocket.agencies !== undefined && lanzamiento.rocket.agencies !== null) {
  //         if (lanzamiento.rocket.agencies !== undefined && lanzamiento.rocket.agencies !== null) {}
  //         if (lanzamiento.rocket.agencies.length !== null && lanzamiento.rocket.agencies.length !== undefined) {
  //           if (lanzamiento.rocket.agencies.length > 0) {
  //             res = lanzamiento.rocket.agencies[0].id === valor;
  //           }
  //         }
  //       }
  //     }
  //     return res;
  // }
  // private filtraMisiones(lanzamiento: any, valor: number): boolean {
  //     let res: boolean;
  //     res = false;
  //     if (lanzamiento.missions !== undefined) {
  //       if (lanzamiento.missions.length > 0) {
  //         res = lanzamiento.missions[0].type === valor;
  //       }
  //     }
  //     return res;
  // }
}
