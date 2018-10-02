import { Action } from '@ngrx/store';
import { AgenciasActions, AgenciasActionTypes } from './agencias.actions';

export interface AgenciaState {
  agencias: any[];
  cargando: boolean;
  mensaje?: string;
}

export const initialState: AgenciaState = {
  agencias: [],
  cargando: false
};

export function reducer(state = initialState, action: Action): AgenciaState {
  switch (action.type) {
    case AgenciasActionTypes.CargarAgencias:
      state.cargando = true;
      return {...state};
    case AgenciasActionTypes.AgenciasCargadas:
      state.agencias = action.payload;
      state.cargando = false;
      state.mensaje = null;
      return {...state };
    case AgenciasActionTypes.AgenciasNoCargadas:
      state.agencias = [];
      state.cargando = false;
      state.mensaje = action.payload;
      return { ...state };
    default:
      return {...state };
  }
}
