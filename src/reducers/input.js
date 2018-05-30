import {TYPE_IN, CHECK_FAILURE, CHECK_SUCCESS, RESET_SUCCESS} from '../actions/input';

const DEFAULT = {
  input: '',
  failure: false,
  success: false,
};

const input = (state = DEFAULT, {type, payload}) => {
  switch (type) {
    case TYPE_IN:
      return {...state, input: payload, failure: false, success: false}
    case CHECK_FAILURE:
      return {...state, failure: true}
    case CHECK_SUCCESS:
      return {...state, success: true}
    case RESET_SUCCESS:
      return {...state, success: false}
    default: return state
  }

}

export default input;
