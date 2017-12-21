import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'
import { Collapse } from 'react-collapse';
import { presets } from 'react-motion';

class Menu extends Component {

  state = {
    active: 0
  }

  componentDidMount() {
    document.onkeydown = e => {
      switch (e.key) {
        case 'ArrowUp':
          this.navigate.prev()
          break;
        case 'ArrowDown':
          this.navigate.next()
          break;
        default:
          break;
      }
    }
  }

  navigate = {
    prev: () => {
      const active = this.getActiveIndex()
      if (active > 0) {
        this.props.history.push("/" + slugify(this.props.items[active - 1].title))
        this.setState({ active: active - 1 })
      }
      
    },
    next: () => {
      const active = this.getActiveIndex()
      const len = this.props.items.length
      if (active < len - 1) {
        this.props.history.push("/" + slugify(this.props.items[active + 1].title))
        this.setState({ active: active + 1 })
      }
    }
  }

  getActiveSlug = () => {
    const regex = /\/(.*?)\//
    const path = this.props.location.pathname
    const slug = regex.exec(path + '/')[1]
    if (path) { return slug }
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
    const timesPlaceholder = _.times(menuItems.length - activeIndex)
    
    return (
      <div className="es-menu">
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