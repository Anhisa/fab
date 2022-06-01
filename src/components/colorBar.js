
import { path } from 'd3';
import { scaleLinear, scaleSequential } from 'd3';
import React from 'react'
import { useGetTweetsByCountry } from '../helpers/getTweetsByCountry';
import { ColorBarContainer, ColorBarStyled } from '../styles/styledComponents/ColorBarStyled';

const ColorBar = () => {

return (
<ColorBarContainer>
  <em>Menor <br/>
    actividad</em>
    <ColorBarStyled
    />
    <em>Mayor <br/>
      actividad</em>
  </ColorBarContainer>

)
}



export default ColorBar
