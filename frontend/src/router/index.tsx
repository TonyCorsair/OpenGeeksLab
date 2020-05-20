import React, { Suspense } from "react";
import { Router, Route, Switch, RouteProps } from "react-router-dom";
import { history } from "../redux/store";
import Fallback from "../components/common/fallback";
import { connect } from "react-redux";
import { IRootReducer } from "../redux/reducers/state";
import { IAuth } from "../types/auth";

const HomePage = React.lazy(() => import("../pages/home"));
const Login = React.lazy(() => import("../pages/auth-pages/loginPage"));
const Register = React.lazy(() => import("../pages/auth-pages/signUpPage"));
const SignUpSuccessPage = React.lazy(() =>
  import("../pages/auth-pages/signUpSuccess")
);
const ForgotPassword = React.lazy(() =>
  import("../pages/auth-pages/forgotPage")
);
const ForgotPasswordSuccess = React.lazy(() =>
  import("../pages/auth-pages/forgotPassSuccess")
);

interface IMainRouterProps extends RouteProps {
  auth: IAuth;
}

function MainRouter(props: IMainRouterProps) {
  return (
    <Router history={history}>
      <Suspense fallback={<Fallback />}>
        <Switch>
          {props.auth ? (
            <Route exact path="/" component={HomePage} />
          ) : (
            <>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route
                exact
                path="/signup/success"
                component={SignUpSuccessPage}
              />
              <Route exact path="/forgot" component={ForgotPassword} />
              <Route
                exact
                path="/forgot/success"
                component={ForgotPasswordSuccess}
              />
            </>
          )}
        </Switch>
      </Suspense>
    </Router>
  );
}

const mapStateToProps = (state: IRootReducer): IMainRouterProps => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainRouter);
