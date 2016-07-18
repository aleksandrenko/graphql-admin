import './style.less';
import React from 'react';
import { Link } from 'react-router';

import store from '../../store';

const state = store.getState();

const Component = React.createClass({
  render() {
    return (
        <cc>
          <header>
            <Link to='/'>
              <logo/>
            </Link>
            <nav>
              {
                state.routes.paths.map(function(route) {
                  return <Link to={route.path} activeClassName="selected" key={route.label}>{route.label}</Link>
                })
              }
            </nav>
            <settings>s</settings>
          </header>
          { this.props.children }
        </cc>
    );
  }
});

export default Component;
