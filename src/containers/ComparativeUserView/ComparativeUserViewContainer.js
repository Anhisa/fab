import React from 'react';
import handleClick from '../../helpers/HandleClick';
import { CollapsableTableStyled } from '../../styles/styledComponents/CollapsableTableStyled';
import { ComparativeUserViewContainerStyle } from '../../styles/styledComponents/ComparativeUserViewContainer';
import { StyledFilterButton } from '../../styles/styledComponents/StyledFilterButton';
import { HtMostUsedItems } from '../HtMostUsed';
import { MostMentionedItems } from '../MostMentioned';
import { MostRepliedItems } from '../MostReplied';
import { MostRetweetedItems } from '../MostRetweeted';

const ComparativeUserViewContainer = ({ period }) => {
  return (
    <ComparativeUserViewContainerStyle usuario="usuario">
          <CollapsableTableStyled className='table hashtags'>
        <StyledFilterButton type="button" name="most-ht" onClick={handleClick}>
          Hashtags más usados
        </StyledFilterButton>

        <HtMostUsedItems period={period} />
      </CollapsableTableStyled>
      <CollapsableTableStyled className='table'>
        <StyledFilterButton
          type="button"
          name="most-retweet"
          onClick={handleClick}
        >
          Usuarios más retuiteados
        </StyledFilterButton>
        <MostRetweetedItems period={period} />
      </CollapsableTableStyled>
      <CollapsableTableStyled className='table'>
        <StyledFilterButton
          type="button"
          name="most-replied"
          onClick={handleClick}
        >
          Usuarios que más han recibido respuesta
        </StyledFilterButton>

        <MostRepliedItems period={period} />
      </CollapsableTableStyled>

      <CollapsableTableStyled className='table'>
        <StyledFilterButton
          type="button"
          name="most-mentioned"
          onClick={handleClick}
        >
          Usuarios más mencionados
        </StyledFilterButton>

        <MostMentionedItems period={period} />
      </CollapsableTableStyled>
  
    </ComparativeUserViewContainerStyle>
  );
};

export default ComparativeUserViewContainer;
