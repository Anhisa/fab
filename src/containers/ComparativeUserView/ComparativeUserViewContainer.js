import React from 'react';
import handleClick from '../../helpers/HandleClick';
import { CollapsableTableStyled } from '../../styles/styledComponents/CollapsableTableStyled';
import { ComparativeUserViewContainerStyle } from '../../styles/styledComponents/ComparativeUserViewContainer';
import { StyledFilterButton } from '../../styles/styledComponents/StyledFilterButton';
import { HtMostUsedItems } from '../HtMostUsed';
import { MostMentionedItems } from '../MostMentioned';
import { MostRepliedItems } from '../MostReplied';
import { MostRetweetedItems } from '../MostRetweeted';
import ButtonToogle from '../../components/ButtonToogle';

const ComparativeUserViewContainer = ({ period }) => {
  return (
    <ComparativeUserViewContainerStyle usuario={true}>
        <div id='left'>
      <CollapsableTableStyled className='table'>
        <ButtonToogle 
         
          name="most-retweet"
          
        >
          Usuarios más retuiteados
        </ButtonToogle>
        <MostRetweetedItems period={period} usuario={true} />
      </CollapsableTableStyled>
      <CollapsableTableStyled className='table'>
        <ButtonToogle         
          name="most-replied"          
        >
          Usuarios que más han recibido respuesta
        </ButtonToogle>

        <MostRepliedItems period={period} usuario={true}/>
      </CollapsableTableStyled>
      </div>
      <div id='right'>
      <CollapsableTableStyled className='table'>
        <ButtonToogle name="most-ht" >
          Hashtags más usados
        </ButtonToogle>

        <HtMostUsedItems period={period} usuario={true} />
      </CollapsableTableStyled>
      <CollapsableTableStyled className='table'>
        <ButtonToogle         
          name="most-mentioned"         
        >
          Usuarios más mencionados
        </ButtonToogle>

        <MostMentionedItems period={period} usuario={true} />
      </CollapsableTableStyled>
      </div>  
  
    </ComparativeUserViewContainerStyle>
  );
};

export default ComparativeUserViewContainer;
