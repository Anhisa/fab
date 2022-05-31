
import { path } from 'd3';
import { scaleLinear, scaleSequential } from 'd3';
import React from 'react'
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';
import { ColorBarContainer, ColorBarStyled } from '../styles/styledComponents/ColorBarStyled';

const ColorBar = () => {

return (
<ColorBarContainer>
  <em>Menos interacción</em>
    <ColorBarStyled
    />
    <em>Más interacción</em>
  </ColorBarContainer>
 
)
}
  


export default ColorBar