import './style.less';
import React from 'react';

const Component = React.createClass({
  propTypes: {
    schema: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      schema: {
        types: []
      }
    };
  },
  render() {
    return (
        <section>
          <h1>Entities</h1>
          <list>
          {
            this.props.schema.types.map(function(type) {
              return <item className="entities">
                <aside>
                  <count>??</count>
                </aside>
                <section>
                  <header>{type.name} ({type.kind})</header>
                  <small>{ type.fields && type.fields.map((field) => field.name + ', ') }</small>
                </section>
              </item>
            })
          }
          </list>
        </section>
    );
  }
});

export default Component;
