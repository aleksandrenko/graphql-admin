import { introspectionQuery } from 'graphql';

const GRAPHQL_SERVER_URL = 'http://localhost:8081';
const API = {};

API.fetch = (request, callback, error) => {
  fetch(GRAPHQL_SERVER_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: request
    })
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    callback(response.data);
  }).catch(function (err) {
    error(err);
  });
};

API.fetchSchema = (callback, error) => API.fetch(introspectionQuery, callback, error);

export default API;