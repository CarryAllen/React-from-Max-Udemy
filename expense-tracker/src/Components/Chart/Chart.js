import React from "react";
import ChartBar from './ChartBar';
import './chart.css';

const Chart = props => {
  return (
    <div className="chart">
      {props.datapoints.map(dpnt => <ChartBar key={dpnt.label} value={dpnt.value} maxValue={null} label={dpnt.label} />)}
    </div>
  );
} 

export default Chart;