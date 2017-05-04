import {List, Map} from 'immutable';

export type IplayerInitialState = Map<string, boolean | List<number>>;
export type IgeneralGameInitialState = Map<string, boolean | List<number>>;


export interface IgeneralGameReducer {
    (state: Map<string, number | boolean>,
     action: {
         type: string,
         color: number, strict: boolean, on: boolean, timeout: boolean,
         value: boolean,
     });
}

export interface IplayerReducer {

    (state: Map<string, List<number> | boolean>, action: { type: string, color: number, playerTurn: boolean });
}

export interface IcomputerReducer {

    (state: Map<string, List<number> | number | string>, action: { type: string, color: number });
}
