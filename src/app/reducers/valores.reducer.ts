import { ValoresActions, ValoresActionTypes } from './valores.actions';


export interface ValoresState {
  valores: any[];
  message: string;
}

export const initialState: ValoresState = {
  valores: [] ,
  message: ''
};

export function reducer(state = initialState, action: ValoresActions): ValoresState {
  switch (action.type) {
    case ValoresActionTypes.CargarValores:
      return { ...state };
    case ValoresActionTypes.ValoresGuardados:
      return { ...state, valores: action.payload };
    case ValoresActionTypes.ValoresNoGuardados:
      this.message = action.payload;
      break;
    default:
      return state;
  }
}
