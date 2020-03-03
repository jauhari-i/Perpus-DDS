import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { pages } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pages.Home} />
        <Route exact path="/peminjam" component={pages.Peminjams} />
        <Route exact path="/petugas" component={pages.Petugases} />
        <Route exact path="/anggota" component={pages.Anggotas} />
        <Route exact path="/test" component={pages.DummyPage} />
        <Route exact path="/peminjam/:id" component={pages.Peminjam} />
        <Route exact path="/petugas/:id" component={pages.Petugas} />
        <Route exact path="/anggota/:id" component={pages.Anggota} />
        <Route component={pages.Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
