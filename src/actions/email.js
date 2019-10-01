import axios from 'axios'

export const SEND_EMAIL_START = Symbol('SEND_EMAIL_START')
export const SEND_EMAIL_SUCCESS = Symbol('SEND_EMAIL_SUCCESS')
export const SEND_EMAIL_FAIL = Symbol('SEND_EMAIL_FAIL')

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
