import './style.less';
import React from 'react';

import TestD3 from '../../components/d3'

const Component = React.createClass({
  render() {
    return (
        <section>
          <h1>Dashboards</h1>
          <TestD3 />
        </section>
    );
  }
});

export default Component;
