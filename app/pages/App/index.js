import './style.less';
import './c3js.less';

import React from 'react';
import { Link } from 'react-router';
import Icon from '../../components/Icon';

import actions from '../../actions';
import store from '../../store';

const Component = React.createClass({
  propTypes: {
    inConfigMode: React.PropTypes.bool.isRequired,
    config: React.PropTypes.object,
    routes: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      inConfigMode: false,
      routes: [],
      config: {}
    };
  },
  closeDialog() {
    store.dispatch({
      type: actions.TOGGLE_CONFIG
    });
  },
  graphqlUrlUpdate(event) {
    store.dispatch({
      type: actions.UPDATE_GRAPHQL_SERVER_URL,
      payload: event.target.value
    });
  },
  render() {
    return (
        <cc>
          <header className={this.props.inConfigMode ? 'blurred' : ''}>
            <Link to='/'><logo/></Link>
            <nav>
              {
                this.props.routes.paths.map(function (route) {
                  return <Link to={route.path} activeClassName="selected" key={route.label}>{route.label}</Link>
                })
              }
            </nav>
            <settings onClick={this.closeDialog}><Icon icon="settings" /></settings>
          </header>

          <main className={this.props.inConfigMode ? 'blurred' : ''}>
            { this.props.children }
          </main>

          <overlay className={this.props.inConfigMode ? '' : 'hidden'}>
            <dialog open>
              <header>Central Command Config</header>
              <main>
                this.props.inConfigMode: '{this.props.inConfigMode}'
                <label>Graphql endpoint url:
                  <input type="url"
                         placeholder="http://..."
                         value={this.props.config.graphql_url}
                         onChange={this.graphqlUrlUpdate}
                      />
                </label>
              </main>
              <footer>
                <button onClick={this.closeDialog}>Save</button>
                &nbsp;
                <button onClick={this.closeDialog}>Cancel</button>
              </footer>
            </dialog>
            <overlay />
          </overlay>
        </cc>
    );
  }
});

export default Component;
