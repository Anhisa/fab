import { ExpandedStyled } from '../styles/styledComponents/ExpandedStyled'
import React from 'react'
import PropTypes from 'prop-types'

ExpandedComponent.propTypes = {
  data: PropTypes.object.isRequired
}

export function ExpandedComponent ({ data }) {
  return (
    <ExpandedStyled className="expanded">
      <h3>
        Categoría:<em>{data.categoría}</em>
      </h3>
      <span>{data.catDesc}</span>
    </ExpandedStyled>
  )
}
