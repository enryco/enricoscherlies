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
          this.navigate.main.prev(1)
          break;
        case 'ArrowDown':
        case 's':
          this.navigate.main.next(1)
          break;
        case 'ArrowLeft':
        case 'a':
          this.navigate.sub.prev(2)
          break;
        case 'ArrowRight':
        case 'd':
          this.navigate.sub.next(2)
          break;
        default:
          break;
      }
    }
  }

  navigate = {

    main: {
      prev: (level = 0) => {
        const active = this.getActiveIndex(level)
        const len = this.props.items.length

        if (active > 0) {
          this.props.history.push("/" + slugify(this.props.items[active - 1].title))
          this.setState({ active: active - 1 })
        } else if (active === 0) {
          this.props.history.push("/" + slugify(this.props.items[len - 1].title))
          this.setState({ active: len - 1 })
        }

      },
      next: (level = 0) => {
        const active = this.getActiveIndex(level)
        const len = this.props.items.length
        if (active < len - 1) {
          this.props.history.push("/" + slugify(this.props.items[active + 1].title))
          this.setState({ active: active + 1 })
        } else if (active === len - 1) {
          this.props.history.push("/" + slugify(this.props.items[0].title))
          this.setState({ active: 0 })
        }
      }
    },
    sub: {
      prev: (level = 0) => {
        const mainItem = this.props.items[this.getActiveIndex(1)]
        const mainItems = _.map(mainItem.items, i => i)

        if (mainItems) {
          const active = this.getActiveIndex(2)
          const len = mainItems.length
          if (active > 0) {
            this.props.history.push(slugify(mainItems[active - 1].title))
          } else if (active === 0) {
            this.props.history.push(slugify(this.props.items[len - 1].title))
          }
        }

      },
      next: (level = 0) => {
        const mainItem = this.props.items[this.getActiveIndex(1)]
        const mainItems = _.map(mainItem.items, i => i)

        if (mainItems) {
          const active = this.getActiveIndex(2)
          const len = mainItems.length
          if (active < len - 1) {
            this.props.history.push(slugify(mainItems[active + 1].title))
          } else if (active === len - 1) {
            this.props.history.push(slugify(this.props.items[len + 1].title))
          }
        }
      }
    }
  }



  getActiveSlug = (level) => {
    const slug = this.props.location.pathname.split("/")[level]
    if (slug) { return slug }
    return ''
  }

  getActiveIndex = (level) => {
    if (level === 1 ) {
      return _.findIndex(this.props.items, i => {
        return slugify(i.title) === this.getActiveSlug(level)
      })
    }

    if (level === 2 ) {
      const mainItem = this.props.items[this.getActiveIndex(1)]
      const items = _.map(mainItem.items, i => i)

      return _.findIndex(items, i => {
        return slugify(i.title) === this.getActiveSlug(level)
      })
    }
  }

  render() {

    console.log(this.getActiveIndex(2))


    const menuItems = this.props.items
    const activeIndex = this.getActiveIndex(1)
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
