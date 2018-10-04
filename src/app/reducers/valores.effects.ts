import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValoresActionTypes, CargarValores, ValoresGuardados } from './valores.actions';
import { mergeMap, map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';


@Injectable()
export class ValoresEffects {

  @Effect()
  public guardar$ = this.actions$
    .ofType(ValoresActionTypes.CargarValores)
    .pipe(
      mergeMap((action: CargarValores) =>
        this.apiService
          .getCriteria(action.payload)
          .pipe(map(valores => new ValoresGuardados(valores)))

      )
    );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
