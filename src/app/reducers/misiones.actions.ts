import { Action } from '@ngrx/store';

export enum MisionesActionTypes {
  CargarMisiones = '[Misiones] Cargar',
  MisionesCargadas = '[Misiones] Cargadas',
  MisionesNoCargadas = '[Misiones] No Cargadas'
}

export class CargarMisiones implements Action {
  readonly type = MisionesActionTypes.CargarMisiones;
}

export class MisionesCargadas implements Action {
  readonly type = MisionesActionTypes.MisionesCargadas;
  constructor(readonly payload: any[]) {}
}

export class MisionesNoCargadas implements Action {
  readonly type = MisionesActionTypes.MisionesNoCargadas;
  constructor(readonly payload: string) {}
}

export type MisionesActions =
  | CargarMisiones
  | MisionesCargadas
  | MisionesNoCargadas;

