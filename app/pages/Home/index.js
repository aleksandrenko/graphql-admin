
import './style.less';
import React from 'react';
import GraphIQL from '../../components/GraphIQL'

import Menu from '../../components/Menu';

const Component = React.createClass({
  render() {
    return (
      <section>
        home page<br />
        is loading: { this.props.loading ? 'LOADING' : 'NONE' } <br />
        scheme: '{ this.props.schema && Object.keys(this.props.schema) }'

        { console.log(this.props.schema) }
        <Menu items={ this.props.schema ? Object.keys(this.props.schema._typeMap) : [] } />
        <GraphIQL />
      </section>
    );
  }
});

export default Component;
