import { Action } from '@ngrx/store';

export enum AgenciasActionTypes {
  CargarAgencias = '[Agencias] Load',
  AgenciasCargadas = '[Agencias] Cargadas',
  AgenciasNoCargadas = '[Agencias] No Cargadas'
}

export class CargarAgencias implements Action {
  readonly type = AgenciasActionTypes.CargarAgencias;
}

export class AgenciasCargadas implements Action {
  readonly type = AgenciasActionTypes.AgenciasCargadas;
  constructor(public readonly payload: any[]) {}
}

export class AgenciasNoCargadas implements Action {
  readonly type = AgenciasActionTypes.AgenciasNoCargadas;
  constructor(public readonly payload: string) {}
}

export type AgenciasActions = CargarAgencias | AgenciasCargadas | AgenciasNoCargadas;
