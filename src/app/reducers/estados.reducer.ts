import { Action } from '@ngrx/store';
import { EstadosActions, EstadosActionTypes } from './estados.actions';


export interface EstadoState {
  estados: any[];
  cargando: boolean;
  mensaje?: string;
}

export const initialState: EstadoState = {
  estados: [],
  cargando: false,
  mensaje: '',
};

export function reducer(state = initialState, action: EstadosActions): EstadoState {
  switch (action.type) {
    case EstadosActionTypes.CargarEstados:
      state.cargando = true;
      return {...state};
    case EstadosActionTypes.EstadosCargados:
      state.estados = action.payload;
      state.cargando = false;
      state.mensaje = null;
      return {...state };
    case EstadosActionTypes.EstadosNoCargados:
      state.estados = [];
      state.cargando = false;
      state.mensaje = action.payload;
      return { ...state };
    default:
      return {...state };
  }
}
