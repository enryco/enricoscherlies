import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'
import { Collapse } from 'react-collapse';
import { presets } from 'react-motion';
import keydown, { Keys } from 'react-keydown';
import SubNavigation from './SubNavigation'



class Navigation extends Component {

  componentDidMount() {
    document.addEventListener('keydown', e => {
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
    })


    if (this.props.location.pathname === "/") {
      this.props.history.push("/why/i-love-solving-problems")
    }
  }


  navigate = {
    prev: () => {
      const active = this.getActiveIndex()
      const len = this.props.items.length

      if (active > 0) {
        this.props.history.push("/" + slugify(this.props.items[active - 1].title))
      }
      if (active === 0) {
        this.props.history.push("/")
      }
      if (active === -1) {
        this.props.history.push("/" + slugify(this.props.items[len - 1].title))
      }

    },
    next: () => {
      const active = this.getActiveIndex()
      const len = this.props.items.length

      if (active < len - 1) {
        this.props.history.push("/" + slugify(this.props.items[active + 1].title))
      }
      if (active === len - 1) {
        this.props.history.push("/")
      }
      if (active === -1) {
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

    const subMenuItems = menuItems[activeIndex] && _.map(menuItems[activeIndex].items, i => i)

    return (
      <div className="es-menu-navigation">
        <SubNavigation items={subMenuItems} parentSlug={this.getActiveSlug()} />
      </div>
    );
  }
}

const NavigationWithRouter = withRouter(Navigation)
export default NavigationWithRouter;
