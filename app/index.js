import './styles.less'

import ReactDOM from 'react-dom';
import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import { connect, Provider } from 'react-redux';

import API from './api';
import store from './store';

import { buildClientSchema } from 'graphql';
//import getQueryFacts from '../node_modules/graphiql/dist/utility/getQueryFacts';

API.fetchSchema((resources) => {
  let schema = buildClientSchema(resources);
  console.log(schema);

  let typeName = 'Query';
  console.log('typeName', schema.getType(typeName));
  console.log('fields', schema.getType(typeName).getFields());

  //let queryFacts = getQueryFacts(schema);
  //let query = '';
  //console.log(queryFacts, query);
});


import HomePage from './pages/Home';
import Error404 from './pages/Error404';

const routes =
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="*" component={Error404}/>
      </Router>
    </Provider>;

// Render
ReactDOM.render(routes, document.getElementById('main'));


//import Form from "react-jsonschema-form";
//
//const formSchema = {
//  title: "Todo",
//  type: "object",
//  required: ["title"],
//  properties: {
//    title: {type: "string", title: "Title", default: "A new task"},
//    done: {type: "boolean", title: "Done?", default: false}
//  }
//};
//
//const formData = {
//  title: "First task",
//  done: true
//};
//
//const log = (type) => console.log.bind(console, type);
//
//// Required for codemirror styling and mode
//import Codemirror from 'react-codemirror';
//import 'codemirror/lib/codemirror.css';
//import 'codemirror/theme/dracula.css';
//require('codemirror/mode/javascript/javascript');
//
//
//// Grind
//// http://adazzle.github.io/react-data-grid/examples.html#/basic
//
//import ReactDataGrid  from 'react-data-grid/addons';
//
//var _rows = [];
//for (var i = 1; i < 1000; i++) {
//  _rows.push({
//    id: i,
//    title: 'Title ' + i,
//    count: i * 1000
//  });
//}
//
////A rowGetter function is required by the grid to retrieve a row for a given index
//var rowGetter = function(i){
//  return _rows[i];
//};
//
//var columns = [{
//  key: 'id',
//  name: 'ID'
//}, {
//  key: 'title',
//  name: 'Title'
//}, {
//  key: 'count',
//  name: 'Count'
//}]
/*
 <Codemirror value={schema} options={{
 mode: 'javascript',
 lineNumbers: true,
 theme: 'dracula'
 }} />
 <h2>Schema generated form:</h2>
 <Form schema={formSchema}
 formData={formData}
 onChange={log("changed")}
 onSubmit={log("submitted")}
 onError={log("errors")} />
 <ReactDataGrid
 className='grid'
 columns={columns}
 rowGetter={rowGetter}
 rowsCount={_rows.length}
 minHeight={500} />
 * */
