import ReactDOM from 'react-dom';
import React from 'react';

import Codemirror from 'react-codemirror';
import schema from './schema';

import './styles.less'

// Required for codemirror styling and mode
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
require('codemirror/mode/javascript/javascript');

ReactDOM.render(
  <section>
    <h1>Sample GRAPHQL schema</h1>
    <Codemirror value={schema} options={{
      mode: 'javascript',
      lineNumbers: true,
      theme: 'dracula',
    }} />
  </section>,
  document.getElementById('main'));
