import React from 'react'

export default function Chart(props) {
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value}/>)}
    </div>
  )
}
