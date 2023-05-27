import React from 'react'
import Pie from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { LegendOrdinal, LegendLabel, LegendItem } from '@visx/legend';

import { animated, useTransition, to } from '@react-spring/web';

import styles from './styles.module.scss';

const PieModule = ({_data, combinedProperty, big = false, animate = true}) => {
  const legendWidth = 100;
  const width = big ? 720-legendWidth : 500-legendWidth
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;

  const legendGlyphSize = 15;

  let data = []
  for (let i = 0; i < combinedProperty.attributes.length; i++) {
    data.push({
      "key": combinedProperty.attributesName[i],
      "value": parseInt(_data[0][combinedProperty.attributes[i]]),
    })
  }

  const getValueColor = scaleOrdinal({
    domain: data.map((d) => d.key),
    range: ['#36438B', '#4A5CBF', '#5E75F2', '#99A9FF', '#AAB3E7', '#202646', '#1F295E'],
  });
  const value = (d) => d.value;

  return (
    <div className='flex flex-row items-center'>
      <svg width={width} height={height}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          <Pie
            data={
              data
            }
            pieValue={value}
            pieSortValues={() => -1}
            outerRadius={radius}
          >
            {
              (datum) =>
              (
                <AnimatedPie
                  {...datum}
                  animate={animate}
                  getKey={({ data: {key} }) => key}
                  getColor={({ data: {key} }) => getValueColor(key)}
                />
              )
            }
          </Pie>
        </Group>
      </svg>
      <div className={styles.legends}>
        <LegendOrdinal scale={getValueColor} labelFormat={(label) => label}>
          {(labels) => (
            <div>
              {labels.slice(0,data.length).map((label, i) => (
                <LegendItem
                  key={`legend-quantile-${i}`}
                  margin="5px 5px"
                >
                  <svg width={legendGlyphSize} height={legendGlyphSize}>
                    <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />
                  </svg>
                  <LegendLabel className={styles.label} align="left" margin="0 0 0 4px">
                    {label.text}
                  </LegendLabel>
                </LegendItem>
              ))}
            </div>
          )}
        </LegendOrdinal>
      </div>
    </div>
  )
}

const fromLeaveTransition = ({ endAngle }) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});
const enterUpdateTransition = ({ startAngle, endAngle }) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

function AnimatedPie({
  animate,
  arcs,
  path,
  getKey,
  getColor,
}) {
  const transitions = useTransition(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  });
  return transitions((props, arc, { key }) => {
    const [centroidX, centroidY] = path.centroid(arc);
    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

    return (
      <g key={key}>
        <animated.path
          // compute interpolated path d attribute from intermediate angle values
          d={to([props.startAngle, props.endAngle], (startAngle, endAngle) =>
            path({
              ...arc,
              startAngle,
              endAngle,
            }),
          )}
          fill={getColor(arc)}
        />
        {hasSpaceForLabel && (
          <animated.g style={{ opacity: props.opacity }}>
            <text
              fill="white"
              x={centroidX}
              y={centroidY}
              dy=".33em"
              fontSize={9}
              textAnchor="middle"
              pointerEvents="none"
            >
              {getKey(arc)}
            </text>
          </animated.g>
        )}
      </g>
    );
  });
}

export default PieModule