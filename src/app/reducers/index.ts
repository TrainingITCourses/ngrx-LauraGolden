import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAgencias from './agencias.reducer';
import * as fromEstados from './estados.reducer';
import * as fromMisiones from './misiones.reducer';
import * as fromLanzamientos from './lanzamientos.reducer';
import * as fromValores from './valores.reducer';

export interface GlobalState {

  agencias: fromAgencias.AgenciaState;
  estados: fromEstados.EstadoState;
  misiones: fromMisiones.MisionState;
  lanzamientos: fromLanzamientos.LanzamientoState;
  valores: fromValores.ValoresState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  agencias: fromAgencias.reducer,
  estados: fromEstados.reducer,
  misiones: fromMisiones.reducer,
  lanzamientos: fromLanzamientos.reducer,
  valores: fromValores.reducer,
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
