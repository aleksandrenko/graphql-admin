
import './style.less';
import React from 'react';
import queryGenerator from '../../utils/queryGenerator';
import schemaTools from '../../utils/schema';
import SERVER from '../../server';

let once = true;

const Component = React.createClass({
  getInitialState() {
    return {
      responceDom: []
    }
  },
  //getData() {
  //  if (!this.props.schema) {
  //    return;
  //  }
  //
  //  const schema = this.props.schema;
  //  const queryTypes = schema.getType('Query').getFields();
  //  const type = this.props.params.type;
  //  return queryTypes[type].type.ofType._fields;
  //},
  render() {
    const lis = () => {
      const schema = this.props.schema;

      if (!schema) {
        return;
      }

      const queryTypes = schema._queryType._fields;
      const type = this.props.params.type;
      const entity = queryTypes[type];

      // =================================================================

      const query = queryGenerator(entity, schema);
      console.log('query:', query);

      if (!once) {
        return;
      } else {
        once = false;
      }
      SERVER.fetch(query, (responce) => {
        if (responce) {
          let responceDom = [];

          Object.keys(responce).forEach((type) => {

            responceDom.push(<div>==============================================================================</div>);
            responceDom.push(<h2>{ type }</h2>);

            responce[type].forEach((entry) => {
              responceDom.push(<div>----------------------------------------------------------------------------</div>);
              Object.keys(entry).forEach((key) => {
                responceDom.push(<div>{key}: { entry[key].id || entry[key] }</div>);
              });
            });
            responceDom.push(<div>----------------------------------------------------------------------------</div>);


            this.setState({
              responceDom: responceDom
            });
          });
        }
      });

      // =================================================================
      const entityType = schemaTools.getType(entity);

      const lis = [];
      lis.push(<li><h1>type: { entityType.name }</h1></li>);

      entityType.fields.forEach((field) => {
        lis.push(<li><b>{ field.name }</b>: { field.type }</li>);
      });

      return lis;
    };

    return (
      <section>
        Type page: <b>{ this.props.params.type }</b>

        <ul>
          { lis() }
        </ul>

        <h1>Server Responce:</h1>
        { this.state.responceDom }
      </section>
    );
  }
});

export default Component;
