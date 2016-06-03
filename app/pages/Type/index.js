
import './style.less';
import React from 'react';

const Component = React.createClass({
  getData() {
    if (!this.props.schema) {
      return;
    }

    const schema = this.props.schema;
    const queryTypes = schema.getType('Query').getFields();
    const type = this.props.params.type;
    return queryTypes[type].type.ofType._fields;
  },
  render() {
    const lis = (properties) => {
      if(!properties) {
        return false;
      }

      const lis = [];

      Object.keys(properties).forEach((key) => {
        lis.push(<li>{ key }: { properties[key].type.name || properties[key].type.ofType.name }</li>);
      });

      return lis;
    };

    return (
      <section>
        Type page: <b>{ this.props.params.type }</b>

        <ul>
          { lis(this.getData()) }
        </ul>
      </section>
    );
  }
});

export default Component;
