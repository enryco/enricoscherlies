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
        case 'w':
          this.navigate.prev()
          break;
        case 'ArrowDown':
        case 's':
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
      const len = this.props.items.length

      if (active > 0) {
        this.props.history.push("/" + slugify(this.props.items[active - 1].title))
      }
      else if (active === 0) {
        this.props.history.push("/")
      }
      else if (active === -1) {
        this.props.history.push("/" + slugify(this.props.items[len - 1].title))
      }

    },
    next: () => {
      const active = this.getActiveIndex()
      const len = this.props.items.length

      if (active < len - 1) {
        this.props.history.push("/" + slugify(this.props.items[active + 1].title))
      }
      else if (active === len - 1) {
        this.props.history.push("/")
      }
      else if (active === -1) {
        this.props.history.push("/" + slugify(this.props.items[0].title))
      }
    }
  }

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
