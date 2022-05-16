import React from 'react';
import { useGetData } from '../hooks/useGetData';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import 'bootstrap/dist/css/bootstrap.css';

export const CompCategoryCb = () => {

  return (
    <div>
      <h5>Criterios</h5>
      <FormGroup className = "container-fluid row">
        <div className = "col-6">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Usuarios más retuiteados" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Usuarios que más han recibido respuestas" />
        </div>
        <div className = "col-6">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Usuarios más mencionados" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Hashtags más utilizados" />
        </div>
      </FormGroup>
    </div>
  );
};
