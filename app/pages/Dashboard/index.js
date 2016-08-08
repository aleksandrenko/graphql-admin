import './style.less';
import React from 'react';

import C3Chart from 'react-c3js';


const data = [
  ['data1', 30, 200, 100, 400, 150, 250],
  ['data2', 50, 20, 10, 40, 15, 25]
];

const CHARTS = {
  'SPINE': 'spline',
  'GAUGE': 'gauge',
  'DONUT': 'donut',
  'SCATTER': 'scatter',
  'STEP': 'step',
  'AREA_STEP': 'area-step',
  'BAR': 'bar',
  'LINE': 'line'
};


const Component = React.createClass({
  render() {
    return (
        <section>
          <h1>Dashboards</h1>

          <C3Chart data={{
           columns: data,
           type: CHARTS.LINE
          }}/>

          <C3Chart data={{
           columns: data,
           type: CHARTS.SPINE
          }}/>

          <C3Chart data={{
           columns: data,
           type: CHARTS.STEP
          }}/>

          <C3Chart data={{
           columns: data,
           type: CHARTS.AREA_STEP
          }}/>

          <C3Chart data={{
           columns: data,
           type: CHARTS.BAR
          }}/>

          <C3Chart data={{
           columns: [['data', 91.4]],
           type: CHARTS.GAUGE
          }}/>

          <C3Chart data={{
            columns: [
              ['data1', 30],
              ['data2', 120]
            ],
            type : CHARTS.DONUT
          }}/>

          <C3Chart data={{
            xs: {
              setosa: 'setosa_x',
              versicolor: 'versicolor_x'
            },
            // iris data from R
            columns: [
                ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ],
            type: CHARTS.SCATTER
          }}/>

        </section>
    );
  }
});

export default Component;
