import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MisionesActionTypes, MisionesCargadas, MisionesNoCargadas, CargarMisiones } from './misiones.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';



@Injectable()
export class MisionesEffects {

  // @Effect()
  // public load$ = this.actions$.ofType(MisionesActionTypes.CargarMisiones).pipe(
  //   mergeMap((action: CargarMisiones) => this.apiService.getMissionsTypes().pipe(
  //     map(misiones => new MisionesCargadas(misiones)),
  //     catchError( err => of(new MisionesNoCargadas('Las misiones no han podido cargarse')))
  //   ))
  // );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
