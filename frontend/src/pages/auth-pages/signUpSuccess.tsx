import React from "react";
import {Link} from "react-router-dom";


const SignUpSuccessPage = () => {
    return (
        <div>
            <h1>Вы успешно зарегистрировались</h1>
            <div>
                Пожалуйста перейдите по <Link to='/'>ссылке </Link>чтобы авторизоваться
            </div>
        </div>
    )
};

export default SignUpSuccessPage;
