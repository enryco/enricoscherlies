import React, { Component } from 'react';
import { appState } from './fixtures/content'
import { Route, Link, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import Menu from './components/menu/Menu'

class App extends Component {
  state = appState

  render() {
    return (
      
      <BrowserRouter>
        <div className="es-app">

          {/* ROUTING */}

          <Switch>
            <Route path="why" render={() => null} />
            <Route path="what" render={() => null} />
            <Route path="how" render={() => null} />
            <Route path="who" render={() => null} />
          </Switch>

          {/* MENU */}
          <Menu items={this.state} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;




