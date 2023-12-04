import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { CollapsableTableStyled } from '../../styles/styledComponents/CollapsableTableStyled'
import { ComparativeUserViewContainerStyle } from '../../styles/styledComponents/ComparativeUserViewContainer'
import HtMostUsedItems from '../HtMostUsed'
import MostMentionedItems from '../MostMentioned'
import MostRepliedItems from '../MostReplied'
import MostRetweetedItems from '../MostRetweeted'
import ButtonToogle from '../../components/ButtonToogle'
import openTables from '../../helpers/OpenTables'
import UpArrow from '../../components/UpArrow'

ComparativeUserViewContainer.propTypes = {
  period: PropTypes.object.isRequired,
  usuario: PropTypes.bool.isRequired,
  context: PropTypes.object.isRequired
}

function ComparativeUserViewContainer ({ period, usuario, context }) {
  const [open, setOpen] = React.useState(false)
  function handleClick () {
    openTables(open, setOpen)
  }
  return (
    <>

    <ComparativeUserViewContainerStyle usuario={usuario}>
     <Button className='button' variant="contained" onClick={handleClick}>
        {!open ? 'Open' : 'Close'} tables
      </Button>
        <CollapsableTableStyled className="table">
          <ButtonToogle usuario={true} name="most-retweet" open={open} setOpen={setOpen}>
          Most retweeted users
          </ButtonToogle>
          <MostRetweetedItems
            period={period}
            usuario={usuario}
            context={context}
          />
        </CollapsableTableStyled>
        <CollapsableTableStyled className="table" >
          <ButtonToogle usuario={true} name="most-replied" open={open} setOpen={setOpen}>
          Most replied users
          </ButtonToogle>

          <MostRepliedItems
            period={period}
            usuario={usuario}
            context={context}
          />
        </CollapsableTableStyled>

        <CollapsableTableStyled className="table">
          <ButtonToogle name="most-ht" usuario={true} open={open} setOpen={setOpen}>
          Most used Hashtags
          </ButtonToogle>

          <HtMostUsedItems
            period={period}
            usuario={usuario}
            context={context}
          />
        </CollapsableTableStyled>
        <CollapsableTableStyled className="table">
          <ButtonToogle usuario={true} name="most-mentioned" open={open} setOpen={setOpen}>
          Most mentioned users
          </ButtonToogle>

          <MostMentionedItems
            period={period}
            usuario={usuario}
            context={context}
          />
        </CollapsableTableStyled>
        <UpArrow />
    </ComparativeUserViewContainerStyle>
    </>
  )
}

export default ComparativeUserViewContainer
