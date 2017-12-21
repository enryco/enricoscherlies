import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import _ from 'lodash'
import SubMenu from './SubMenu'

class MenuItem extends Component {
    state = {}

    render() {
        const slugs = _.map(this.state.team, p => p.slug)
        const titles = _.map(this.state.team, p => p.title)
        const getActiveSlug = () => {
            const regex = /\/(.*?)\//
            const path = this.props.location.pathname
            const slug = regex.exec(path + '/')[1]
            if (path) { return slug }
            return ''
        }

        const isActive = getActiveSlug() === this.props.slug

        return (
            <div className="es-menu-item">
                <MainLink
                    slug={this.props.slug}
                    title={this.props.title}
                    isActive={isActive}
                />
                {
                    isActive && <SubMenu
                        parent={this.props.slug}
                        items={this.props.items}
                    />
                }
            </div>
        );
    }
}

const MenuItemWithRouter = withRouter(MenuItem)

export default MenuItemWithRouter;

const MainLink = props => {
    return <div className={`es-menu-item__link es-menu-item__link${props.isActive && '--active'}`}>
        <Link className="es-menu-item__link-text" to={`/${props.slug}`}>{props.title}</Link>
    </div>
}

