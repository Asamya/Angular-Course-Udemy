import { User } from '../user.model';

export interface State {
  user: User;
}

const initialState: State = {
  user: null
};

function authReducer(state = initialState, action) {
  return state;
}
