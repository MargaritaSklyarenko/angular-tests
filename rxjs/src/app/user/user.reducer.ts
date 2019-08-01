import { User } from "./user";
import * as fromRoot from '../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    users: UserState;
}

export interface UserState {
    maskUserName: boolean;
}

const initState: UserState = {
    maskUserName: true
}

// const getProductFeatureState = createFeatureSelector<UserState>('users');

// export const getShowUserCode = createSelector(
//     getProductFeatureState,
//     state => state.maskUserName
// );


export function reducer(state = initState, action): UserState {
    switch (action.type) {
        case 'TOGGLE_USER_CODE':
        return {
            maskUserName: action.payload
        };

        default: return state;
    }
}