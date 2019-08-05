import axios from 'axios'

export const SEND_EMAIL_START = Symbol('SEND_EMAIL_START')
export const SEND_EMAIL_SUCCESS = Symbol('SEND_EMAIL_SUCCESS')
export const SEND_SUBSCRIBE_START = Symbol('SEND_SUBSCRIBE_START')
export const SEND_SUBSCRIBE_SUCCESS = Symbol('SEND_SUBSCRIBE_SUCCESS')

export function sendEmail (attributes) {
  return dispatch => {
    dispatch({
      type: SEND_EMAIL_START
    })

    return axios.post('/email/contact', attributes)
      .then(function (response) {
        dispatch(sendEmailSuccess(response, SEND_EMAIL_SUCCESS))
      })
      .catch(function (error) {
        console.log(error)
        throw new Error(error)
      })
  }
}

export function sendSubscribe (attributes) {
  return dispatch => {
    dispatch({
      type: SEND_SUBSCRIBE_START
    })

    return axios.post('/email/subscribe', attributes)
      .then(function (response) {
        dispatch(sendEmailSuccess(response, SEND_SUBSCRIBE_SUCCESS))
      })
      .catch(function (error) {
        console.log(error)
        throw new Error(error)
      })
  }
}

function sendEmailSuccess (payload, symbol) {
  return {
    type: symbol,
    payload
  }
}
