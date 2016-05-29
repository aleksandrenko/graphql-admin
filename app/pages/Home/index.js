
import './style.less';
import React from 'react';
import GraphIQL from '../../components/GraphIQL'

const Component = React.createClass({
  render() {
    return (
      <section>
        home page
        <GraphIQL />
      </section>
    );
  }
});

export default Component;
