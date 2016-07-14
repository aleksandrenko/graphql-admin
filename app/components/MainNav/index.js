
import './style.less';
import React from 'react';

const Component = React.createClass({

  render() {
    return (
        <nav>
          <a href="/" class="selected">Dashboard</a>
          <a href="/explorer/">Explorer</a>
          <a href="/queries/">Queries</a>
          <a href="/entities/">Entities (3)</a>
          <a href="/scheme/">Scheme</a>
          <a href="/console/">Console</a>
          <a href="/logs/">Logs</a>
        </nav>
    );
  }
});

export default Component;
