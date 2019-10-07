import axios from 'axios'

export const SEND_EMAIL_START = Symbol('SEND_EMAIL_START')
export const SEND_EMAIL_SUCCESS = Symbol('SEND_EMAIL_SUCCESS')
export const SEND_EMAIL_FAIL = Symbol('SEND_EMAIL_FAIL')

export const SEND_SUBSCRIBE_START = Symbol('SEND_SUBSCRIBE_START')
export const SEND_SUBSCRIBE_SUCCESS = Symbol('SEND_SUBSCRIBE_SUCCESS')
export const SEND_SUBSCRIBE_FAIL = Symbol('SEND_SUBSCRIBE_FAIL')

export const sendEmail = values => async (dispatch) => {
  try {
    dispatch({ type: SEND_EMAIL_START })

    const res = await axios.post('/email/contact', values)
    dispatch({ type: SEND_EMAIL_SUCCESS, data: res })
  } catch (e) {
    console.error(e)
    dispatch({ type: SEND_EMAIL_FAIL })
  }
}

export const sendSubscribe = values => async (dispatch) => {
  try {
    dispatch({ type: SEND_SUBSCRIBE_START })

    const res = await axios.post('/email/subscribe', values)
    dispatch({ type: SEND_SUBSCRIBE_SUCCESS, data: res })
  } catch (e) {
    console.error(e)
    dispatch({ type: SEND_SUBSCRIBE_FAIL })
  }
}
