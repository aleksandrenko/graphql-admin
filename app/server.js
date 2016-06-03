import { introspectionQuery } from 'graphql';

//test request to get che schema
if (!window.fetch) {
  alert(`Your browser does NOT support the fetch api, so you can't use this app.`);
}

const SERVER = {};

SERVER.URL = 'http://localhost:8081';

SERVER.fetch = (request, callback, error) => {
  fetch(SERVER.URL, {
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
    error ? error(err) : console.log(err);
  });
};

SERVER.fetchSchema = (callback, error) => SERVER.fetch(introspectionQuery, callback, error);

export default SERVER;
