import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'

class Menu extends Component {

  render() {
    return (
      <div className="es-menu">
        {
          _.map(this.props.items, (item, key) => {
            return <MenuItem
              key={key}
              title={item.title}
              slug={slugify(item.title)}
              items={item.items}
            />
          })
        }
      </div>
    );
  }
}

export default Menu;

