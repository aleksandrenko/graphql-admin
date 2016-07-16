import './style.less';
import React from 'react';
import { Link } from 'react-router';

const Component = React.createClass({
  render() {
    return (
        <cc>
          <header>
            <Link to='/'>
              <logo/>
            </Link>
            <nav>
              <Link to="/dashboard/" activeClassName="selected">Dashboard</Link>
              <Link to="/explorer/" activeClassName="selected">Explorer</Link>
              <Link to="/queries/" activeClassName="selected">Queries</Link>
              <Link to="/entities/" activeClassName="selected">Entities (3)</Link>
              <Link to="/scheme/" activeClassName="selected">Scheme</Link>
              <Link to="/console/" activeClassName="selected">Console</Link>
              <Link to="/logs/" activeClassName="selected">Logs</Link>
            </nav>
            <settings>s</settings>
          </header>
          { this.props.children }
        </cc>
    );
  }
});

export default Component;
