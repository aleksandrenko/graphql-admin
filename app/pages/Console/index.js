import './style.less';
import React from 'react';

import GraphIQL from '../../components/GraphIQL';

import SERVER from '../../server';

const graphQLFetcher = (graphQLParams) => {
  return fetch(SERVER.URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
};

const Component = React.createClass({
  render() {
    return (
        <GraphIQL fetcher={graphQLFetcher} />
    );
  }
});

export default Component;
