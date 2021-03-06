import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'
import { Collapse } from 'react-collapse';
import { presets } from 'react-motion';

class SubNavigation extends Component {

  componentDidMount() {
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
  }

  navigate = {
    prev: () => {
      if (!this.props.items) { return null }

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
      if (!this.props.items) { return null }

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
    return null
  }
}

const SubNavigationWithRouter = withRouter(SubNavigation)
export default SubNavigationWithRouter;
