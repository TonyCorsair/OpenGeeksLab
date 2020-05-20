import React, {Dispatch} from "react";
import ForgotForm from "../../containers/auth/forgotPassword";
import {AuthActions} from "../../redux/actions/auth";
import {IForgot} from "../../types/auth";
import {connect} from "react-redux";


type IForgotPassword = ReturnType<typeof mapDispatchToProps>

const ForgotPasswordPage = (props: IForgotPassword) => {
    return (
        <div>
            <ForgotForm handleSubmit={props.forgotPass}/>
        </div>
    )

};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    forgotPass: (payload: IForgot) => dispatch(AuthActions.forgotPass(payload))
});


export default connect(null, mapDispatchToProps)(ForgotPasswordPage);
