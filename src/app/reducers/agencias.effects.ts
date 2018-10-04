import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AgenciasActionTypes, AgenciasCargadas, AgenciasNoCargadas, CargarAgencias } from './agencias.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';


@Injectable()
export class AgenciasEffects {

  // @Effect()
  // public load$ = this.actions$.ofType(AgenciasActionTypes.CargarAgencias).pipe(
  //   mergeMap((action: CargarAgencias) => this.apiService.getAgencies().pipe(
  //     map(agencias => new AgenciasCargadas(agencias)),
  //     catchError( err => of(new AgenciasNoCargadas('Las agencias no han podido cargarse')))
  //   ))
  // );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
