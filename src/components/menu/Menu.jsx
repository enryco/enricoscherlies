import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'
import { Collapse } from 'react-collapse';
import { presets } from 'react-motion';
import Navigation from './Navigation'

class Menu extends Component {

  getActiveSlug = () => {
    const slug = this.props.location.pathname.split("/")[1]
    if (slug) { return slug }
    return ''
  }

  getActiveIndex = () => {
    return _.findIndex(this.props.items, i => {
      return slugify(i.title) === this.getActiveSlug()
    })
  }

  render() {
    const menuItems = this.props.items
    const activeIndex = this.getActiveIndex()
    const timesPlaceholder = _.times(menuItems.length - activeIndex - 1)

    return (
      <div className="es-menu">
        <Navigation items={this.props.items} />
        <div>
          <Collapse isOpened={true} springConfig={presets.gentle}>
            {
              _.map(timesPlaceholder, (e, i) => <div key={i + 10} className="es-menu-item es-menu-item__link-text es-menu-item__placeholder">placeholder</div>)
            }
          </Collapse>
        </div>
        <div>
          {
            _.map(menuItems, (item, key) => {
              return <MenuItem
                key={key}
                title={item.title}
                slug={slugify(item.title)}
                items={item.items}
              />
            })}
        </div>
        {

        }
      </div>
    );
  }
}

const MenuWithRouter = withRouter(Menu)
export default MenuWithRouter;
