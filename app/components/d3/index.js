import './style.less';

import React from 'react';

import { select } from 'd3';
import ReactFauxDOM from 'react-faux-dom';

const Component = React.createClass({
  render() {
    var list = ReactFauxDOM.createElement('ul');

    select(list)
        .selectAll('li')
        .data([1,2,3])
        .enter()
        .append('li')
        .text((d) => d);

    return list.toReact();
  }
});

export default Component;
