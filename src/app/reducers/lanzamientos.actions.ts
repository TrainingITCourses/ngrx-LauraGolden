import { Action } from '@ngrx/store';

export enum LanzamientosActionTypes {
  LoadLanzamientoss = '[Lanzamientos] Load Lanzamientoss'
}

export class LoadLanzamientoss implements Action {
  readonly type = LanzamientosActionTypes.LoadLanzamientoss;
}

export type LanzamientosActions = LoadLanzamientoss;
