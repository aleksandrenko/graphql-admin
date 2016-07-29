import { createStore } from 'redux';
import { connect } from 'react-redux';
import server from './server';

import actions from './actions';
import reducers from './reducers';

import DashboardPage from './pages/Dashboard';
import ExplorerPage from './pages/Explorer';
import QueriesPage from './pages/Queries';
import EntitiesPage from './pages/Entities';
import SchemaPage from './pages/Schema';
import ConsolePage from './pages/Console';
import LogsPage from './pages/Logs';

// MAKE CONNECTED COMP
const EntitiesPageConnected = connect((_store) => ({
  schema: _store.schema
}), actions)(EntitiesPage);

const INITIAL_STATE = {
  routes: {
    index: '/dashboard/',
    paths: [
      { path: '/dashboard', component: DashboardPage, label: 'Dashboard' },
      { path: "/explorer/", component: ExplorerPage, label: 'Explorer' },
      { path: "/queries/", component: QueriesPage, label: 'Queries' },
      { path: "/entities/", component: EntitiesPageConnected, label: 'Entities' },
      { path: "/scheme/", component: SchemaPage, label: 'Scheme' },
      { path: "/console/", component: ConsolePage, label: 'Console' },
      { path: "/logs/", component: LogsPage, label: 'Logs' }
    ]
  }
};

const devToolsExtension = window.devToolsExtension && window.devToolsExtension();
const store = createStore(reducers, INITIAL_STATE, devToolsExtension);

// populate the grapqhl scheme in the store
server.fetchSchema((scheme) => {
  console.log('scheme', scheme);

  store.dispatch({
    type: actions.SCHEME_LOADED,
    payload: scheme
  })
}, (err) => {
  console.log('err', err);
});

export default store;
