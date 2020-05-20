import React, {Dispatch} from "react";
import RegisterForm from "../../containers/auth/signUp";
import {ISignUp} from "../../types/auth";
import {AuthActions} from "../../redux/actions/auth";
import {connect} from "react-redux";

type ISignUpContainerProps = ReturnType<typeof mapDispatchToProps>

function Register(props: ISignUpContainerProps) {
    return (
        <div>
            <RegisterForm handleSubmit={props.signUP}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    signUP: (payload: ISignUp) => dispatch(AuthActions.signUP(payload))
});

export default connect(null, mapDispatchToProps)(Register)
