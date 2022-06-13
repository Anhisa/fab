import React, { useState, useEffect } from 'react';
import {
  ErrorContainer,
  ErrorTable,
} from '../styles/styledComponents/ErrorTable.styled';

const UsePeriodErrors = ({ periodComparison, errors, setErrors }) => {

  useEffect(() => {
    if (periodComparison.periodA.id === periodComparison.periodB.id && periodComparison.periodA.id !== '' && periodComparison.periodB.id !== '')  {
      setErrors((prevErrors) => ({
        ...prevErrors,
        samePeriods: true,
      }));
    } else if (
      periodComparison.periodA.id === '' ||
      periodComparison.periodB.id === ''
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emptyPeriods: true,
      }));
    } else if (periodComparison.periodA.id > periodComparison.periodB.id) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nonAscendingPeriods: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        samePeriods: false,
        emptyPeriods: false,
        nonAscendingPeriods: false,
      }));
    }
  }, [periodComparison]);

  // return [
  //   errors.samePeriods, errors.emptyPeriods, errors.nonAscendingPeriods,
  // ]
  return (
    <ErrorContainer>
      {errors.samePeriods === true && (
        <ErrorTable>
          <p>Las fechas no pueden ser iguales</p>
        </ErrorTable>
      )}
      {errors.emptyPeriods === true && (
        <ErrorTable>
          <p>Las fechas no pueden estar vacias</p>
        </ErrorTable>
      )}
      {errors.nonAscendingPeriods === true && (
        <ErrorTable>
          <p>Las fechas no pueden ser descendentes</p>
        </ErrorTable>
      )}
    </ErrorContainer>
  );
};

export default UsePeriodErrors;
