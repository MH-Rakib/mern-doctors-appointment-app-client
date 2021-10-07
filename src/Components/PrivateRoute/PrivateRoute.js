import React, { useContext } from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import { UserContext } from "./../../App";

function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.isSigned ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
