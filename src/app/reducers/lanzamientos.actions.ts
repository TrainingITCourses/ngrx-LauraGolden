import { Action } from '@ngrx/store';

export enum LanzamientosActionTypes {
  FiltrarLanzamientos = '[Lanzamientos] Filtrar',
  LanzamientosFiltrados = '[Lanzamientos] Filtrados',
  LanzamientosNoFiltrados = '[Lanzamientos] No Filtrados'
}

export class FiltrarLanzamientos implements Action {
  readonly type = LanzamientosActionTypes.FiltrarLanzamientos;
  constructor(readonly payload: any) {}
}

export class LanzamientosFiltrados implements Action {
  readonly type = LanzamientosActionTypes.LanzamientosFiltrados;
  constructor(readonly payload: any[]) {}
}

export class LanzamientosNoFiltrados implements Action {
  readonly type = LanzamientosActionTypes.LanzamientosNoFiltrados;
  constructor(readonly payload: string) {}
}

export type LanzamientosActions =
  | FiltrarLanzamientos
  | LanzamientosFiltrados
  | LanzamientosNoFiltrados;


