import {createAction} from "redux-actions";
import {IAuth, IForgot, ILogin, ISignUp} from "../../types/auth";

enum Type {
    SET_AUTH = 'SET_AUTH',
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
    FORGOT_PASS = 'FORGOT_PASS'
}

const setAuth = createAction<IAuth>(Type.SET_AUTH);
const signIn = createAction<ILogin>(Type.SIGN_IN);
const signUP = createAction<ISignUp>(Type.SIGN_UP);
const forgotPass = createAction<IForgot>(Type.FORGOT_PASS);


export const AuthActions = {
    Type,

    signIn,
    signUP,
    setAuth,
    forgotPass
};

export type AuthActions = Omit<typeof AuthActions, 'Type'>;
