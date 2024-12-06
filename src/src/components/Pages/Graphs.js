import React, { useEffect } from 'react';
import async from 'async';
import Plotly from 'plotly.js-dist';

const Graphs = () => {
  useEffect(() => {
    
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const y = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

    const data = [{
      x: x,
      y: y,
      type: 'bar',
      text: y.map(String),
      textposition: 'auto',
      marker: {color:'dark Yellow'},
    }];
    const layout = {
      title: 'Dekha graph',
      xaxis: {title:'a-axis'},
      yaxis: {title: 'b-axis'},
      barcornerradius: 10,
    }
      Plotly.newPlot('chart', data, layout);
      return () => {
        Plotly.purge('chart');
      };
    },[]);
      return (
        <div id = "chart"></div>

      );    
    };
export default Graphs;

// const fetchData = async () => {
//   try {
//     const response = await fetch ("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     const data = await response.json();
//     console.log(data);
//   }
// }
