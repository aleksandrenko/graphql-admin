import './style.less';
import React from 'react';

import TestD3 from '../../components/d3'

const Component = React.createClass({
  propTypes: {
    schema: React.PropTypes.object
  },
  getDefaultProps: function () {
    return {
      schema: {
        types: []
      }
    };
  },
  render() {

    var grapqhlNativeTypes = ["Query", "ID", "String", "Query", "__Schema", "__Type", "__TypeKind", "Boolean", "__Field", "__InputValue", "__EnumValue", "__Directive", "__DirectiveLocation"];
    var filteredTypes = this.props.schema.types.filter((type) => {
      return grapqhlNativeTypes.indexOf(type.name) === -1
    });

    return (
        <section>
          <h1>Queries</h1>
          d3: <TestD3 />

          { this.props.schema.types.length === 0 &&
          <div>No types loaded, check the endpoint.</div>
          }

          <div>types: { this.props.schema.types.length }</div>
          <div>filteredTypes: { filteredTypes.length }</div>

          {
            console.log(filteredTypes)
          }

        </section>
    );
  }
});

export default Component;
