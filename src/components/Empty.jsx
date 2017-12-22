import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import _ from 'lodash'


class EmptyComponent extends Component {
  state = {}

  render() {
    return (
      <div className="es-">
      </div>
    );
  }
}

export default EmptyComponent;

const EmptyStatelessFunction = props => {
  return (
    <div className="es-">
    </div>
  );
};

export default EmptyStatelessFunction;
