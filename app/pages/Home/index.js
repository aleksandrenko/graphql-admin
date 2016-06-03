
import './style.less';
import React from 'react';
import GraphIQL from '../../components/GraphIQL'

const Component = React.createClass({
  render() {
    return (
      <section>
        home page<br />
        scheme: '{ this.props.schema && Object.keys(this.props.schema) }'
        <GraphIQL />
      </section>
    );
  }
});

export default Component;
