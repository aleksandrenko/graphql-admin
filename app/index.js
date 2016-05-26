import './styles.less'

import ReactDOM from 'react-dom';
import React from 'react';

import schema from './schema';


import Form from "react-jsonschema-form";

const formSchema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const formData = {
  title: "First task",
  done: true
};

const log = (type) => console.log.bind(console, type);

// Required for codemirror styling and mode
import Codemirror from 'react-codemirror';
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
    <h2>Schema generated form:</h2>
    <Form schema={formSchema}
          formData={formData}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
  </section>,
  document.getElementById('main'));
