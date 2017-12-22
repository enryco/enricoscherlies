import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'

class SubMenu extends Component {


  componentDidMount() {
  }

  render() {
    const getActiveSlug = () => {
      const slug = this.props.location.pathname.split("/")[2]
      if (slug) { return slug }
      return ''
    }

    return (
      <div className="es-sub-menu">
        {
          _.map(this.props.items, (item, key) => {
            const isActive = getActiveSlug() === slugify(item.title)
            return <div key={key}>
              <SubLink
                slug={slugify(item.title)}
                title={item.title}
                active={getActiveSlug() === slugify(item.title)}
                parent={this.props.parent}
              />
              {
                isActive && <Content item={item} />
              }
            </div>
          })
        }
      </div>
    );
  }
}

const SubMenuWithRouter = withRouter(SubMenu)

export default SubMenuWithRouter;

const SubLink = props => {
  return <div className={`es-sub-menu-item es-sub-menu-item${props.active && '--active'}`} >
    <Link className="es-sub-menu-item__link" to={`/${props.parent}/${props.slug}`}>{props.title}</Link>
  </div>
}


const Content = props => {
  return <div className={`es-sub-menu-item-content`} >
    <div
      className="es-sub-menu-item-content__textfield"
      dangerouslySetInnerHTML={{ __html: props.item.textfield }
      }
    />
  </div>
}
