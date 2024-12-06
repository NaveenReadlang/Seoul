import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { positions } from '@mui/system';

const graphData = [
    {
        "Disposed_0_to_1y": 9000,
        "Disposed_1_to_2y": 8000,
        "Disposed_2_to_5y": 7000,
        "Disposed_5_to_10y": 6000,
        "Disposed_10_to_20y": 5000,
        "Disposed_20_to_30y": 4000,
        "Disposed_30_to_Above": 2000,
    },
];


const EchartsPie = () => {
        const Disposed0to1y = graphData.map(item => item.Disposed_0_to_1y); 
        const Disposed1to2y = graphData.map(item => item.Disposed_1_to_2y);
        const Disposed2to5y= graphData.map(item => item.Disposed_2_to_5y);
        const Disposed5to10y = graphData.map(item => item.Disposed_5_to_10y);
        const Disposed10to20y = graphData.map(item => item.Disposed_10_to_20y); 
        const Disposed20to30y = graphData.map(item => item.Disposed_20_to_30y);
        const Disposed30toAbove = graphData.map(item => item.Disposed_30_to_Above);
    
  const option = () =>  ({
    title: {
      text: 'Disposal year wise count',
      left: 'center'
    },

    tooltip: {
      trigger: 'item'
    },

    legend: {
      orient: 'vertical',
      left: 'right',
      data:['1','2','3','4','5','6','7'],
    },

    // mention chart details
    series: [
      {
        name: 'Disposal 0 to 1',
        type: 'bar',
        radius: '50%',
        data: Disposed0to1y,
    },
    {
        name: 'Disposal 1 to 2y',
        type: 'bar',
        radius: '50%',
        data: Disposed1to2y, 
    },
    {
        name: 'Disposal 2 to 5y',
        type: 'bar',
        radius: '50%',
        data: Disposed2to5y, 
    },
    {
        name: 'Disposal 5 to 10y',
        type: 'bar',
        radius: '50%',
        data: Disposed5to10y, 
    },
    {
        name: 'Disposal 10 to 20y',
        type: 'bar',
        radius: '50%',
        data: Disposed10to20y, 
    },
    {
        name: 'Disposal 20 to 30y',
        type: 'bar',
        radius: '50%',
        data: Disposed20to30y, 
    },
    {
        name: 'Disposal 30 to Above',
        type: 'bar',
        radius: '50%',
        data: Disposed30toAbove, 
    },
    ]
})

  return (
        <div> 
            <ReactECharts 
                option={option}
                style={{height: "600%", width: "100%"}} 
            />
        </div>
  );
}

export default EchartsPie;
