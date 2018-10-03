import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { EstadosActionTypes, EstadosCargados, EstadosNoCargados, CargarEstados } from './estados.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';



@Injectable()
export class EstadosEffects {

  @Effect()
  public load$ = this.actions$.ofType(EstadosActionTypes.CargarEstados).pipe(
    mergeMap((action: CargarEstados) => this.apiService.getAgencies().pipe(
      map(estados => new EstadosCargados(estados)),
      catchError( err => of(new EstadosNoCargados('Las agencias no han podido cargarse')))
    ))
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
