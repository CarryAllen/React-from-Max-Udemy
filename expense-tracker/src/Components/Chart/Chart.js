import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {

  const dataPointsValues = props.dataPoints.map((dtpnt) => dtpnt.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dpnt => <ChartBar key={dpnt.label} value={dpnt.value} maxValue={totalMaximum} label={dpnt.label} />)}
    </div>
  );
} 

export default Chart;