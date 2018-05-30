import store from '../store';

export const TYPE_IN = 'TYPE_IN';
export const CHECK = 'CHECK';
export const CHECK_FAILURE = 'CHECK_FAILURE';
export const CHECK_SUCCESS = 'CHECK_SUCCESS';
export const RESET_SUCCESS = 'RESET_SUCCESS';

export const typeIn = (value) => ({
  type: TYPE_IN,
  payload: value
});

export const resetSuccess = () => ({
  type: RESET_SUCCESS
})

export const check = () => {
  return (dispatch) => {
    const {input: {input}} = store.getState();
    const isValid = input.match(/^0x[a-fA-F0-9]{40}$/);
    if (isValid) {
      dispatch({
        type: CHECK_SUCCESS
      })
    } else {
      dispatch({
        type: CHECK_FAILURE
      })
    }
  }
}
