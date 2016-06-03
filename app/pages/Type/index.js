
import './style.less';
import React from 'react';

const Component = React.createClass({
  render() {
    return (
      <section>
        Type page: <b>{ this.props.params.type }</b>
      </section>
    );
  }
});

export default Component;
