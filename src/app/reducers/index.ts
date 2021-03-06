import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';

import {environment} from '../../environments/environment';
import {LocalStorageConfig, localStorageSync} from 'ngrx-store-localstorage';

export interface State {

}

export function sessionStorage(reducer: ActionReducer<any>): ActionReducer<any> {
    const config: LocalStorageConfig = {
        keys: [
            'auth'
        ],
        rehydrate: true,
        removeOnUndefined: false
    };

    return localStorageSync(config)(reducer);
}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [sessionStorage] : [sessionStorage];
