import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem'
import _ from 'lodash'
import slugify from 'slugify'

class SubMenu extends Component {


  componentDidMount() {
    // document.onkeydown = e => {
    //   switch (e.key) {
    //     case 'ArrowLeft':
    //       this.navigate.prev()
    //       console.log('<-- ->>')

    //       break;
    //     case 'ArrowRight':
    //       this.navigate.next()
    //       console.log('<-- ->>')

    //       break;
    //     default:
    //       break;
    //   }
    // }
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
                        return <SubLink
                            key={key}
                            slug={slugify(item.title)}
                            title={item.title}
              active={getActiveSlug() === slugify(item.title)}
                            parent={this.props.parent}
                        />
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
