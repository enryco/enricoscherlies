import React, { Component } from 'react';
import { appState } from './fixtures/content'
import { Route, Link, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import Menu from './components/menu/Menu'
import Logo from './components/Logo'
import _ from 'lodash'

class App extends Component {
  state = appState

  render() {
    return (

      <BrowserRouter>
        <div className="es-app">
          <div className="es-app-content">

            {/* ROUTING */}

            <Switch>
              <Route path="why" render={() => null} />
              <Route path="what" render={() => null} />
              <Route path="how" render={() => null} />
              <Route path="who" render={() => null} />
            </Switch>

            {/* MENU */}
            <Menu items={_.map(this.state, item => item)} />

            {/* LOGO */}
            <Logo />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;




