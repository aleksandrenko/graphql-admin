//import { sugarStore } from 'redux-sugar-store/dist/index';

//import { buildClientSchema } from 'graphql';
//import SERVER from './server';

import { createStore } from 'redux'

import DashboardPage from './pages/Dashboard';
import ExplorerPage from './pages/Explorer';
import QueriesPage from './pages/Queries';
import EntitiesPage from './pages/Entities';
import SchemaPage from './pages/Schema';
import ConsolePage from './pages/Console';
import LogsPage from './pages/Logs';

const initState = {
  routes: {
    index: '/dashboard/',
    paths: [
      { path: '/dashboard',  component: DashboardPage, label: 'Dashboard' },
      { path: "/explorer/",  component: ExplorerPage,  label: 'Explorer' },
      { path: "/queries/",   component: QueriesPage,   label: 'Queries' },
      { path: "/entities/",  component: EntitiesPage,  label: 'Entities' },
      { path: "/scheme/",    component: SchemaPage,    label: 'Scheme' },
      { path: "/console/",   component: ConsolePage,   label: 'Console' },
      { path: "/logs/",      component: LogsPage,      label: 'Logs' }
    ]
  }
};
const rootReducer = (state, action) => state;

const store = createStore(rootReducer, initState);

export default store;
