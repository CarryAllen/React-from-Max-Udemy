import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => <ChartBar/>)}
    </div>
  )
}
