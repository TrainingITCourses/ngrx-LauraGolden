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

export interface State {

  agencias: fromAgencias.AgenciaState;
  estados: fromEstados.EstadoState;
  misiones: fromMisiones.MisionState;
  lanzamientos: fromLanzamientos.LanzamientoState;
}

export const reducers: ActionReducerMap<State> = {
  agencias: fromAgencias.reducer,
  estados: fromEstados.reducer,
  misiones: fromMisiones.reducer,
  lanzamientos: fromLanzamientos.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
