import { Action } from '@ngrx/store';

export enum AgenciasActionTypes {
  CargarAgencias = '[Agencias] Cargar',
  AgenciasCargadas = '[Agencias] Cargadas',
  AgenciasNoCargadas = '[Agencias] No Cargadas'
}

export class CargarAgencias implements Action {
  readonly type = AgenciasActionTypes.CargarAgencias;
}

export class AgenciasCargadas implements Action {
  readonly type = AgenciasActionTypes.AgenciasCargadas;
  constructor(readonly payload: any[]) {}
}

export class AgenciasNoCargadas implements Action {
  readonly type = AgenciasActionTypes.AgenciasNoCargadas;
  constructor(readonly payload: string) {}
}

export type AgenciasActions =
  | CargarAgencias
  | AgenciasCargadas
  | AgenciasNoCargadas;
