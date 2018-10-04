import { Action } from '@ngrx/store';
import { LanzamientosActions, LanzamientosActionTypes } from './lanzamientos.actions';


export interface LanzamientoState {
  lanzamientos: any[];
  cargando: boolean;
  mensaje?: string;
}

export const initialState: LanzamientoState = {
  lanzamientos: [],
  cargando: false,
  mensaje: '',
};

export function reducer(state = initialState, action: LanzamientosActions): LanzamientoState {
  switch (action.type) {
    case LanzamientosActionTypes.CargarLanzamientos:
      state.cargando = true;
      return {...state};
    case LanzamientosActionTypes.LanzamientosCargados:
      state.lanzamientos = action.payload;
      state.cargando = false;
      state.mensaje = null;
      return {...state };
    case LanzamientosActionTypes.LanzamientosNoCargados:
      state.lanzamientos = [];
      state.cargando = false;
      state.mensaje = action.payload;
      return { ...state };
    default:
      return {...state };
  }
}
