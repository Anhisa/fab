import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

CompCategoryCb.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export function CompCategoryCb ({ setCategories }) {
  const handleSelect = (event) => {
    setCategories((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked
    }))
  }

  return (
    <>
    <div className='btnGroup'>
      <h5>Criterios:</h5>
      <FormGroup className="row">
        <div className="col-6">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Usuarios más retuiteados"
            name="mostRetweeted"
            onChange={handleSelect}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Usuarios con más respuestas"
            name="mostReplied"
            onChange={handleSelect}
          />
        </div>
        <div className="col-6">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Usuarios más mencionados"
            name="mostMentioned"
            onChange={handleSelect}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Hashtags más usados"
            name="mostHashtags"
            onChange={handleSelect}
          />
       <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Número de Tweets mensuales"
            name="monthlyTweets"
            onChange={handleSelect}
          />

        </div>
      </FormGroup>
    </div>
    </>
  )
}
