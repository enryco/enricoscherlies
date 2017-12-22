import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'
import { Collapse } from 'react-collapse';
import { presets } from 'react-motion';

class SubNavigation extends Component {

  componentDidMount() {
    console.log('componentDidMount')

    document.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
          this.navigate.prev()
          break;
        case 'ArrowRight':
        case 'd':
          this.navigate.next()
          break;
        default:
          break;
      }
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  navigate = {
    prev: () => {
      const active = this.getActiveIndex()
      const len = this.props.items.length

      if (len <= 0) { return null }

      if (active > 0) {
        this.props.history.push("/" + this.props.parentSlug + "/" + slugify(this.props.items[active - 1].title))
      }
      if (active === 0) {
        this.props.history.push("/" + this.props.parentSlug + "/")
      }
      if (active === -1) {
        this.props.history.push("/" + this.props.parentSlug + "/" + slugify(this.props.items[len - 1].title))
      }

    },
    next: () => {
      const active = this.getActiveIndex()
      const len = this.props.items.length

      if (len <= 0) { return null }

      if (active < len - 1) {
        this.props.history.push("/" + this.props.parentSlug + "/" + slugify(this.props.items[active + 1].title))
      }
      if (active === len - 1) {
        this.props.history.push("/" + this.props.parentSlug + "/")
      }
      if (active === -1) {
        this.props.history.push("/" + this.props.parentSlug + "/" + slugify(this.props.items[0].title))
      }
    }
  }

  getActiveSlug = () => {
    const slug = this.props.location.pathname.split("/")[2]
    if (slug) { return slug }
    return ''
  }

  getActiveParentSlug = () => {
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

    console.log(activeIndex)
    console.log(this.getActiveSlug())


    return (
      <div className="es-menu-navigation">
      </div>
    );
  }
}

const SubNavigationWithRouter = withRouter(SubNavigation)
export default SubNavigationWithRouter;
