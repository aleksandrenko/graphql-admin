
import './style.less';
import React from 'react';
import GraphIQL from '../../components/GraphIQL'

import Menu from '../../components/Menu';

const Component = React.createClass({
  getQueryFields(schema) {
    if (!schema) {
      return [];
    }

    const typeName = 'Query';
    const queryFields = schema.getType(typeName).getFields();

    return Object.keys(queryFields);
    // return schema.getType(typeName).getFields();
  },

  render() {
    return (
      <section>
        home page<br />
        is loading: { this.props.loading ? 'LOADING' : 'NONE' } <br />
        scheme: '{ this.props.schema && Object.keys(this.props.schema) }'
        <br /><br />
        { console.log('schema: ', this.props.schema) }
        { console.log('props: ', this.props) }
        Schema types:
        <Menu items={ this.props.schema ? Object.keys(this.props.schema._typeMap) : [] } />
        <br />
        Query Fields:
        <Menu items={ this.getQueryFields(this.props.schema) } />
        <GraphIQL />
      </section>
    );
  }
});

export default Component;
