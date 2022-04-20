import React from "react";
import { BrowserRouter as Switch, useLocation, Route } from "react-router-dom";
import Main from "./pages/Main";
import Amuletlist from "./pages/Amuletlist";
import Certificate from "./pages/Certificate";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Protected from "./pages/Protected";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route exact path="/amuletlist" component={Amuletlist} />
        <Route exact path="/certificate" component={Certificate} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
