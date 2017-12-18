import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'


class EmptyComponent extends Component {
  state = {}

  render() {
    return (
      <div className="bb-empty">
      </div>
    );
  }
}

export default EmptyComponent;

const EmptyStatelessFunction = props => {
  return (
    <div className="bb-empty">
    </div>
  );
};

export default EmptyStatelessFunction;
