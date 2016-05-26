export default `
  "data": {
    "__schema": {
      "queryType": {
        "kind": "OBJECT",
        "name": "Query",
        "description": null
      },
      "mutationType": null,
      "subscriptionType": null,
      "directives": [],
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": null,
          "fields": [
            {
              "name": "users",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "description": null
                }
              }
            },
            {
              "name": "activities",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Activity",
                  "description": null
                }
              }
            },
            {
              "name": "interests",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Interest",
                  "description": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Person",
          "description": null,
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "description": "The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \"4\") or integer (such as 4) input value will be accepted as an ID."
                }
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "homepage",
              "type": {
                "kind": "SCALAR",
                "name": "Url",
                "description": null,
                "ofType": null
              }
            },
            {
              "name": "friends",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Friend",
                  "description": null
                }
              }
            },
            {
              "name": "interests",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Interest",
                  "description": null
                }
              }
            },
            {
              "name": "gender",
              "type": {
                "kind": "ENUM",
                "name": "Gender",
                "description": null,
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "ID",
          "description": "The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \"4\") or integer (such as 4) input value will be accepted as an ID.",
          "fields": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          "fields": null
        },
        {
          "kind": "SCALAR",
          "name": "Url",
          "description": null,
          "fields": null
        },
        {
          "kind": "OBJECT",
          "name": "Friend",
          "description": null,
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "description": "The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \"4\") or integer (such as 4) input value will be accepted as an ID."
                }
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "homepage",
              "type": {
                "kind": "SCALAR",
                "name": "Url",
                "description": null,
                "ofType": null
              }
            },
            {
              "name": "friends",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Friend",
                  "description": null
                }
              }
            },
            {
              "name": "friend_since",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "gender",
              "type": {
                "kind": "ENUM",
                "name": "Gender",
                "description": null,
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "Gender",
          "description": null,
          "fields": null
        },
        {
          "kind": "OBJECT",
          "name": "Interest",
          "description": null,
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "description": "The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as 4) or integer (such as 4) input value will be accepted as an ID."
                }
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Activity",
          "description": null,
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "description": "The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \"4\") or integer (such as 4) input value will be accepted as an ID."
                }
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            },
            {
              "name": "location",
              "type": {
                "kind": "OBJECT",
                "name": "Location",
                "description": null,
                "ofType": null
              }
            },
            {
              "name": "type",
              "type": {
                "kind": "OBJECT",
                "name": "Interest",
                "description": null,
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Location",
          "description": null,
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "description": "The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \"4\") or integer (such as 4) input value will be accepted as an ID."
                }
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "latlng",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "__Schema",
          "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
          "fields": [
            {
              "name": "types",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "queryType",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the __TypeKind enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types."
                }
              }
            },
            {
              "name": "mutationType",
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the __TypeKind enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
                "ofType": null
              }
            },
            {
              "name": "subscriptionType",
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the __TypeKind enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
                "ofType": null
              }
            },
            {
              "name": "directives",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "description": null
                }
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "__Type",
          "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the __TypeKind enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
          "fields": [
            {
              "name": "kind",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "__TypeKind",
                  "description": "An enum describing what kind of type a given __Type is."
                }
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "fields",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "interfaces",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "possibleTypes",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "enumValues",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "inputFields",
              "type": {
                "kind": "LIST",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "ofType",
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the __TypeKind enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "__TypeKind",
          "description": "An enum describing what kind of type a given __Type is.",
          "fields": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "The Boolean scalar type represents true or false.",
          "fields": null
        },
        {
          "kind": "OBJECT",
          "name": "__Field",
          "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
          "fields": [
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            },
            {
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "args",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "type",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the __TypeKind enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types."
                }
              }
            },
            {
              "name": "isDeprecated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "description": "The Boolean scalar type represents true or false."
                }
              }
            },
            {
              "name": "deprecationReason",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "__InputValue",
          "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
          "fields": [
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            },
            {
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "type",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the __TypeKind enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types."
                }
              }
            },
            {
              "name": "defaultValue",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "__EnumValue",
          "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
          "fields": [
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            },
            {
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "isDeprecated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "description": "The Boolean scalar type represents true or false."
                }
              }
            },
            {
              "name": "deprecationReason",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "__Directive",
          "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL’s execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          "fields": [
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            },
            {
              "name": "description",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
                "ofType": null
              }
            },
            {
              "name": "locations",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "description": null
                }
              }
            },
            {
              "name": "args",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "description": null
                }
              }
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
          "fields": null
        },
        {
          "kind": "OBJECT",
          "name": "Photo",
          "description": null,
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "description": "The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \"4\") or integer (such as 4) input value will be accepted as an ID."
                }
              }
            },
            {
              "name": "name",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "description": "The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
                }
              }
            },
            {
              "name": "url",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "description": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Url",
                  "description": null
                }
              }
            },
            {
              "name": "location",
              "type": {
                "kind": "OBJECT",
                "name": "Location",
                "description": null,
                "ofType": null
              }
            }
          ]
        }
      ]
    }
  }
}
`
