import {LoginActions, LoginActionTypes} from '../actions/login.actions';
import {User} from '../models/user';

export interface State {
  authenticated: boolean;
  user?: User;
  loading: boolean;
  errorMessage: string;
}

export const initialState: State = {
  authenticated: false,
  loading: false,
  errorMessage: ''
};
// TODO: Manage errors
export function reducer(state = initialState, action: LoginActions): State {

  switch (action.type) {

    case LoginActionTypes.Login:
      return Object.assign({}, state, {
        loading: true
      });

    case LoginActionTypes.LoginSuccess:
      return Object.assign({}, state, {
        authenticated: true,
        loading: false,
        errorMessage: '',
        user : action.payload
      });

    case LoginActionTypes.LoginFailed:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload
      });

    case LoginActionTypes.Logout:
      return Object.assign({}, state, {
        authenticated: false,
        user: undefined
      });

    default:
      return state;
  }
}
