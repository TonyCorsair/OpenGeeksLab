import { call, takeLatest, put } from "redux-saga/effects";
import { Action } from "redux-actions";
import { IAuth, IForgot, ILogin, ISignUp } from "../../types/auth";
import { message } from "antd";
import { signIn, signUp, forgotPass } from "./api/auth";
import { AuthActions } from "../actions/auth";
import * as _ from "lodash";
import { push } from "react-router-redux";
import { forgotPasswordRoute, signUpSuccessRoute } from "../constants";
import { UserActions } from "../actions";

function* SignWorker(action: Action<ILogin>) {
  try {
    /*Data token */
    const { data } = yield call(signIn, action.payload);
    yield put(AuthActions.setAuth(_.pick(data, ["accessToken"]) as IAuth));
    yield put(UserActions.setUser(_.omit(data, ["accessToken"]) as any));
  } catch (error) {
    message.error("Failed to login");
    console.log(error);
  }
}

function* SignUpWorker(action: Action<ISignUp>) {
  try {
    yield call(signUp, action.payload);
    yield put(push(signUpSuccessRoute));
  } catch (error) {
    message.error("Failed to sign up!");
    console.error(error);
  }
}

function* ForgotPassWorker(action: Action<IForgot>) {
  try {
    const { data } = yield call(forgotPass, action.payload);

    yield put(push(forgotPasswordRoute));
  } catch (error) {
    message.error("Failed to password!");
    console.log(error);
  }
}

export default function* watchAuth() {
  yield takeLatest(AuthActions.Type.SIGN_IN, SignWorker);
  yield takeLatest(AuthActions.Type.SIGN_UP, SignUpWorker);
  yield takeLatest(AuthActions.Type.FORGOT_PASS, ForgotPassWorker);
}
