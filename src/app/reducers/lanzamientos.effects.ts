import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LanzamientosActionTypes, FiltrarLanzamientos, LanzamientosFiltrados, LanzamientosNoFiltrados } from './lanzamientos.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';



@Injectable()
export class LanzamientosEffects {

  @Effect()
  public search$ = this.actions$.ofType(LanzamientosActionTypes.FiltrarLanzamientos).pipe(
    mergeMap((action: FiltrarLanzamientos) => this.apiService.getFilterLaunches(action.payload.searchMode, action.payload.id).pipe(
      map(lanzamientos => new LanzamientosFiltrados(lanzamientos)),
      catchError( err => of(new LanzamientosNoFiltrados('Los lanzamientos no han podido filtrarse')))
    ))
  );
  constructor(private actions$: Actions, private apiService: ApiService) {}
}
