import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { pages } from "../pages";
import Drawer from "../components/element/Drawer";
import AnggotaState from "../reducer/state/AnggotaState";
import BukuState from "../reducer/state/BukuState";

export class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  componentDidMount() {
    const login = localStorage.getItem("Login");
    if (login) {
      if (login === "true") {
        this.setState({
          isLoggedIn: true
        });
      }
    }
  }

  _RenderApp() {
    return (
      <Drawer>
        <AnggotaState>
          <BukuState>
            <Switch>
              <Redirect from="/login" to="/" />
              <Route exact path="/" component={pages.Home} />
              <Route exact path="/test" component={pages.DummyPage} />
              <Route exact path="/peminjam" component={pages.Peminjams} />
              <Route exact path="/petugas" component={pages.Petugases} />
              <Route exact path="/buku" component={pages.Bukus} />
              <Route exact path="/anggota" component={pages.Anggotas} />
              <Route exact path="/peminjam/:id" component={pages.Peminjam} />
              <Route exact path="/petugas/:id" component={pages.Petugas} />
              <Route exact path="/anggota/:id" component={pages.Anggota} />
              <Route component={pages.Error404} />
            </Switch>
          </BukuState>
        </AnggotaState>
      </Drawer>
    );
  }

  _RenderLogin() {
    return (
      <Switch>
        <Route exact path="/login" component={pages.Login} />
        <Route>
          <Redirect to="/login" />
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.isLoggedIn ? this._RenderApp() : this._RenderLogin()}
      </BrowserRouter>
    );
  }
}

export default Routes;
