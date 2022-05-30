
import { path } from 'd3';
import { scaleLinear, scaleSequential } from 'd3';
import React from 'react'
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';

const ColorBar = () => {
  const colorScale = scaleLinear()
  .domain([0, 11161])
  .range(['#edf7ff', '#1d9bf0']);


return (

    <div
      style={{
        background: 'rgb(255,255,255)',
        background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 80%, rgba(29,155,240,1) 100%)",
        border: '1px solid black',
        width: '400px',
        height: '100px',
        zIndex: '-1',
        pointerEvents: 'none',
      }}
    />
 
)
}
  


export default ColorBar