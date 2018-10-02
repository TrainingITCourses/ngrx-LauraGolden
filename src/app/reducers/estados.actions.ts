import { Action } from '@ngrx/store';

export enum EstadosActionTypes {
  LoadEstadoss = '[Estados] Load Estadoss'
}

export class LoadEstadoss implements Action {
  readonly type = EstadosActionTypes.LoadEstadoss;
}

export type EstadosActions = LoadEstadoss;
