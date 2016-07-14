
import './style.less';
import React from 'react';
import MainNav from '../MainNav';

const Component = React.createClass({

  render() {
    return (
        <header>
          <logo></logo>
          <MainNav />
          <settings>s</settings>
        </header>
    );
  }
});

export default Component;
