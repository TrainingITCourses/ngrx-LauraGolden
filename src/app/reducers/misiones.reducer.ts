import { Action } from '@ngrx/store';
import { MisionesActions, MisionesActionTypes } from './misiones.actions';

export interface MisionState {
  misiones: any[];
  cargando: boolean;
  mensaje?: string;
}

export const initialState: MisionState = {
  misiones: [],
  cargando: false,
  mensaje: '',
};

export function reducer(state = initialState, action: MisionesActions): MisionState {
  switch (action.type) {
    case MisionesActionTypes.CargarMisiones:
      state.cargando = true;
      return {...state};
    case MisionesActionTypes.MisionesCargadas:
      state.misiones = action.payload;
      state.cargando = false;
      state.mensaje = null;
      return {...state };
    case MisionesActionTypes.MisionesNoCargadas:
      state.misiones = [];
      state.cargando = false;
      state.mensaje = action.payload;
      return { ...state };
    default:
      return {...state };
  }
}
