import { handleActions } from 'redux-actions'
import {
  changeEmail,
  changeCode,
  sendCodeRequest,
  sendCodeSuccess,
  sendCodeFailure,
  verifyCodeRequest,
  verifyCodeSuccess,
  verifyCodeFailure
} from '../../actions/ui/auth'

export default handleActions(
  {
    [changeEmail]: (state, action) => ({ ...state, email: action.payload }),
    [changeCode]: (state, action) => ({ ...state, code: action.payload }),
    [sendCodeRequest]: state => ({ ...state, isSendingCode: true }),
    [sendCodeSuccess]: state => ({
      ...state,
      isSendingCode: false,
      isCodeSent: true
    }),
    [sendCodeFailure]: (state, action) => ({
      ...state,
      isSendingCode: false,
      error: action.payload.message
    }),
    [verifyCodeRequest]: state => ({
      ...state,
      isVerifyingCode: true
    }),
    [verifyCodeSuccess]: state => ({
      ...state,
      isVerifyingCode: false,
      isCodeValid: true
    }),
    [verifyCodeFailure]: (state, action) => ({
      ...state,
      isVerifyingCode: false,
      error: action.payload.message
    })
  },
  {
    error: null,
    email: '',
    code: '',
    isSendingCode: false,
    isCodeSent: false,
    isVerifyingCode: false,
    isCodeValid: false
  }
)