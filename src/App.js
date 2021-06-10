import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Authentication from "./components/auth/Authentication";
import UpdateDetails from "./components/layout/UpdateDetails";
import Get from "./components/Get";
import Landing from "./components/landing/Landing";
import Registration from "./components/auth/Registration";
import CustomizedSnackbars from "./components/Test";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/registration" component={Registration} />
        <Route path="/:role" component={UpdateDetails} />
      </Switch>
    </Router>
    // <Get />
    // <CustomizedSnackbars />
  );
}

export default App;
