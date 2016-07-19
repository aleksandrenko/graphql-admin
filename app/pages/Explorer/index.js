import './style.less';

import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';

import React from 'react';

import {AgGridReact} from 'ag-grid-react';
import {Tabs, Tab} from 'react-draggable-tab';

const tabsClassNames = {
  tabWrapper: 'myWrapper',
  tabBar: 'myTabBar',
  tabBarAfter: 'myTabBarAfter',
  tab: 'myTab',
  tabTitle: 'myTabTitle',
  tabCloseIcon: 'tabCloseIcon',
  tabBefore: 'myTabBefore',
  tabAfter: 'myTabAfter'
};

const tabsStyles = {
  tabWrapper: { marginTop: '10px' },
  tabBar: {},
  tab: {},
  tabTitle: {},
  tabCloseIcon: {},
  tabBefore: {},
  tabAfter: {}
};

var tabs = [
  (<Tab key={'tab0'} title={'ONE'}>
    <div>
      <h1>This tab cannot close</h1>
    </div>
  </Tab>),
  (<Tab key={'tab1'} title={'TWO'}>
    <div>
      <h1>This is tab1</h1>
    </div>
  </Tab>)
];


var gridOptions = {
  columnDefs: [
    { headerName: 'Country', field: 'country' },
    { headerName: 'Lang', field: 'language' }
  ],
  rowData: [
    { country: "Ireland", continent: "Europe", language: "English" },
    { country: "Spain", continent: "Europe", language: "Spanish" },
    { country: "United Kingdom", continent: "Europe", language: "English" },
    { country: "France", continent: "Europe", language: "French" },
    { country: "Germany", continent: "Europe", language: "(other)" },
    { country: "Sweden", continent: "Europe", language: "(other)" },
    { country: "Norway", continent: "Europe", language: "(other)" },
    { country: "Italy", continent: "Europe", language: "(other)" },
    { country: "Greece", continent: "Europe", language: "(other)" },
    { country: "Iceland", continent: "Europe", language: "(other)" },
    { country: "Portugal", continent: "Europe", language: "Portuguese" },
    { country: "Malta", continent: "Europe", language: "(other)" },
    { country: "Brazil", continent: "South America", language: "Portuguese" },
    { country: "Argentina", continent: "South America", language: "Spanish" },
    { country: "Colombia", continent: "South America", language: "Spanish" },
    { country: "Peru", continent: "South America", language: "Spanish" },
    { country: "Venezuela", continent: "South America", language: "Spanish" },
    { country: "Uruguay", continent: "South America", language: "Spanish" }
  ]
};


const Component = React.createClass({
  render() {
    return (
        <section>
          <Tabs
              tabsClassNames={tabsClassNames}
              tabsStyles={tabsStyles}
              //selectedTab={this.state.selectedTab ? this.state.selectedTab : "tab2"}
              //onTabSelect={this.handleTabSelect.bind(this)}
              //onTabClose={this.handleTabClose.bind(this)}
              //onTabAddButtonClick={this.handleTabAddButtonClick.bind(this)}
              //onTabPositionChange={this.handleTabPositionChange.bind(this)}
              tabs={tabs}
              shortCutKeys={
                {
                  'close': ['alt+command+w', 'alt+ctrl+w'],
                  'create': ['alt+command+t', 'alt+ctrl+t'],
                  'moveRight': ['alt+command+tab', 'alt+ctrl+tab'],
                  'moveLeft': ['shift+alt+command+tab', 'shift+alt+ctrl+tab']
                }
              }
              />

          <div className="ag-fresh">
            <AgGridReact
                // listen for events with React callbacks
                //onRowSelected={this.onRowSelected.bind(this)}
                //onCellClicked={this.onCellClicked.bind(this)}
                //
                //// binding to properties within React State or Props
                //showToolPanel={this.state.showToolPanel}
                //quickFilterText={this.state.quickFilterText}
                //icons={this.state.icons}
                //
                //// column definitions and row data are immutable, the grid
                //// will update when these lists change
                columnDefs={gridOptions.columnDefs}
                rowData={gridOptions.rowData}

                // or provide props the old way with no binding
                rowSelection="multiple"
                enableSorting="true"
                enableFilter="true"
                rowHeight="22"
                />
          </div>

        </section>
    );
  }
});

export default Component;
