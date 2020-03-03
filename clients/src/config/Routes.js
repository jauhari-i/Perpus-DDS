import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "../pages/Index";

const Dummy = props => {
  return (
    <div>
      <h1>{props.location.pathname}</h1>
    </div>
  );
};

const EmpatNolEmpat = props => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/peminjam" component={Dummy} />
        <Route exact path="/petugas" component={Dummy} />
        <Route exact path="/anggota" component={Dummy} />
        <Route exact path="/peminjam/:id" component={Dummy} />
        <Route exact path="/petugas/:id" component={Dummy} />
        <Route exact path="/anggota/:id" component={Dummy} />
        <Route component={EmpatNolEmpat} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
