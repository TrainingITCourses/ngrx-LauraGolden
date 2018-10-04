import { Action } from '@ngrx/store';
import { ModoBusqueda } from '../shared/criterion/criterion-modo';

export enum ValoresActionTypes {
  CargarValores = '[Valores] Cargar',
  ValoresGuardados = '[Valores] Guardados',
  ValoresNoGuardados = '[Valores] No Guardados',
}

export class CargarValores implements Action {
  readonly type = ValoresActionTypes.CargarValores;
  constructor(public readonly payload: ModoBusqueda) { }
}

export class ValoresGuardados implements Action {
  readonly type = ValoresActionTypes.ValoresGuardados;
  constructor(public readonly payload: any[]) { }
}

export class ValoresNoGuardados implements Action {
  readonly type = ValoresActionTypes.ValoresNoGuardados;
  constructor(public readonly payload?: any[]) { }
}
export type ValoresActions =
  |CargarValores
  |ValoresGuardados
  |ValoresNoGuardados;
