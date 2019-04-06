import axios from 'axios';

export const SEND_EMAIL_START = Symbol('SEND_EMAIL_START')
export const SEND_EMAIL_SUCCESS = Symbol('SEND_EMAIL_SUCCESS')

export function sendEmail (attributes) {
  return dispatch => {
    dispatch({
      type: SEND_EMAIL_START
    })

    return axios.post('/email/contact', attributes)
      .then(function (response) {
        dispatch(sendEmailSuccess(response))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function sendEmailSuccess (payload) {
  return {
    type: SEND_EMAIL_SUCCESS,
    payload
  }
}
