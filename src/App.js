import { createContext, React, useState } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appoinment from "./Pages/Appoinment/Appoinment";
import UserLogin from "./Pages/UserLogin/UserLogin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [selectedAppointmentDate, setSelectedAppointmentDate] = useState(
    new Date()
  );
  const [loggedInUser, setLoggedInUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    message: "",
  });

  return (
    <UserContext.Provider
      value={{
        appointmentDate: [selectedAppointmentDate, setSelectedAppointmentDate],
        user: [loggedInUser, setLoggedInUser],
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appointment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path="/login">
              <UserLogin></UserLogin>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
