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
    var grapqhlNativeTypes = ["Query", "ID", "String", "Query", "__Schema", "__Type", "__TypeKind", "Boolean", "__Field", "__InputValue", "__EnumValue", "__Directive", "__DirectiveLocation"];
    var filteredTypes = this.props.schema.types.filter((type) => {
      return grapqhlNativeTypes.indexOf(type.name) === -1
    });

    return (
        <section>
          <h1>Entities</h1>

          { this.props.schema.types.length === 0 &&
            <div>No types loaded, check the endpoint.</div>
          }

          <list>
          {
            filteredTypes.map(function(type) {
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
