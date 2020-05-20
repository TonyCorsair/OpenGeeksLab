import React, {Dispatch} from "react";
import LoginForm from "../../containers/auth/login";
import {connect} from "react-redux";
import {ILogin} from "../../types/auth";
import {AuthActions} from "../../redux/actions/auth";


type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>;

function Login(props: ILoginContainerProps) {
    return (
        <div>
            <LoginForm handleSubmit={props.signIn}/>
        </div>
    )
}



const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        signIn: (payload: ILogin) => dispatch(AuthActions.signIn(payload))
    }
};

export default connect(null, mapDispatchToProps)(Login)
