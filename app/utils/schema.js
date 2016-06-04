const getType = (entity) => {
  const graphQlType = entity.type.ofType;
  if (!graphQlType) {
    return
  }
  const fields = graphQlType._fields || {};

  return {
    name: graphQlType.name,
    fields: Object.keys(fields).map((key) => {
      let field = fields[key];

      return {
        name: field.name,
        description: field.description,
        type: field.type.name || field.type.ofType.name
      };
    })
  };
};

export default {
  getType
}