import React from 'react'

import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows } from '@visx/grid';
import { scaleLinear, scaleBand } from '@visx/scale';

const Dashboard = ({_data, property, industry, big, color, companyMode}) => {
  let data = _data.filter(d => d[property] !== undefined)
  data = industry === "all" ? data : data.filter(d => d.industry === industry)

  // Define the graph dimensions and margins
  const width = big ? 900 : 600
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 20, left: 80 };

  // Then we'll create some bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  
  // We'll make some helpers to get at the data we want
  const x = d => {
    if (companyMode) {
      if (d.year !== undefined) {
        return d.year
      }
    } else {
      if (d.company !== undefined) {
        return d.company
      }
    }
    return ""
  }
  const y = d => {
    if (d[property] !== undefined) {
      return parseInt(d[property])
    }
    return 0
  };

  // And then scale the graph by our data
  const xScale = scaleBand({
    range: [0, xMax],
    domain: data.map(x),
    padding: 0.33,
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });

  // Compose together the scale and accessor functions to get point functions
  const compose = (scale, accessor) => data => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  // Finally we'll embed it all in an SVG
  const BarGraph = () => {
    return (
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barHeight = yMax - yPoint(d);
          return (
            <Group key={`bar-${i}`}>
              <Bar
                x={xPoint(d)}
                y={yMax - barHeight}
                height={barHeight}
                width={xScale.bandwidth()}
                fill={color}
              />
            </Group>
          );
        })}
      </svg>
    );
  }

  return (
    <div>
      <svg width={width} height={height}>
        <Group left={margin.left}>
          <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />
          <AxisBottom top={yMax} scale={xScale} numTicks={data.length} />
          <AxisLeft scale={yScale} />
          <BarGraph data={data}/>
        </Group>
        </svg>
    </div>
  )
}

export default Dashboard