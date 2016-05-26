import ReactDOM from 'react-dom';
import React from 'react';

import schema from './schema';

ReactDOM.render(
  <section>
    <h1>Hello React</h1>
    <pre>
      { JSON.stringify(schema).replace(/}/g, '}\n').replace(/{/g, '{\n').replace(/,/g, ',\n') }
    </pre>
  </section>,
  document.getElementById('main'));
