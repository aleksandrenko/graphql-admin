import schemaUtils from './schema';


const fromObjectToQuery = (entity, schema) => {
  const type = schemaUtils.getType(entity);

  console.log('');


  const query = `query {
    ${entity.name} {
      ${ type.fields.map((field) => {
        const entity = schema.getType(field.type);

        if (entity._fields) {
          return `${field.name} { id }`
        }

        return field.name;
      }).join('\n') }
    }
  }`;

  return query;
};

export default fromObjectToQuery;