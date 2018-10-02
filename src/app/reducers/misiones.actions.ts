import { Action } from '@ngrx/store';

export enum MisionesActionTypes {
  LoadMisioness = '[Misiones] Load Misioness'
}

export class LoadMisioness implements Action {
  readonly type = MisionesActionTypes.LoadMisioness;
}

export type MisionesActions = LoadMisioness;
