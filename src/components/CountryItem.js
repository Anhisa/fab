import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified'
import { getFlag } from '../helpers/getFlag'
import {
  CountryCardSelectStyled,
  EmptyCardStyled
} from '../styles/styledComponents/CountryCardSelect'
import { DataTableStyled } from '../styles/styledComponents/ComparativeStyled'
import PropTypes from 'prop-types'
import useQueryData from '../hooks/useQueryData'
const columns = [
  {
    name: 'Nombre',
    selector: (row) => row.official_account_category_spa,
    sortable: true,
    minWidth: '100px',
    maxWidth: '130px'
  },
  {
    name: 'Cuenta',
    selector: (row) => (
      <Link to={`/diplomacia-digital/${row.official_account}`}>
        {' '}
        {row.official_account}{' '}
      </Link>
    ),
    sortable: true,
    minWidth: '120px',
    maxWidth: '170px'
  },
  {
    name: 'Verificado',
    selector: (row) =>
      row.official_account_verified === 'si'
        ? (
        <VerifiedIcon color="primary" />
          )
        : (
        <VerifiedIcon color="disabled" />
          ),

    minWidth: '50px',
    maxWidth: '100px',
    omit: Window.innerWidth < 768
  }
]

CountryItem.propTypes = {
  accountsCountry: PropTypes.array.isRequired,
  countryListManagmentOpen: PropTypes.object.isRequired,
  countrySelectedId: PropTypes.string
}

export function CountryItem ({
  accountsCountry,
  countryListManagmentOpen,
  countrySelectedId
}) {
  const { open } = countryListManagmentOpen
  const { countries } = useQueryData()

  function hasRelationWithTaiwan (countryId) {
    const countryData = countries.find(
      (country) => country.country_id === countryId
    )

    return countryData.official_relations_spa === 'Taiwan' ?? false
  }

  if (accountsCountry.length === 0 && open) {
    const countryData = countries.find(
      (country) => country.country_id === countrySelectedId
    )
    if (open && hasRelationWithTaiwan(countrySelectedId)) {
      return (
        <div className={open ? 'open' : 'closed'}>
          <CountryCardSelectStyled>
            <p>{countryData.country_name_spa ?? ''}</p>
            <img
              src={getFlag(countryData.country_name_eng)}
              alt={`Bandera de ${countryData.country_name_spa}`}
            />
            <hr />
          </CountryCardSelectStyled>
          <EmptyCardStyled>
            <p>
              Tiene relaciones diplomáticas <br></br>
              con La República de China - Taiwán
            </p>
          </EmptyCardStyled>
        </div>
      )
    }
    return (
      <div className={open ? 'open' : 'closed'}>
        <CountryCardSelectStyled>
          <p>{countryData?.country_name_spa ?? ''}</p>
          <img
            src={getFlag(countryData.country_name_eng)}
            alt={`Bandera de ${countryData.country_name_spa}`}
          />
          <hr />
        </CountryCardSelectStyled>
        <EmptyCardStyled>
          <p>No hay cuentas o data registradas en este país</p>
        </EmptyCardStyled>
      </div>
    )
  }

  return (
    <>
      <div className={open ? 'open' : 'closed'}>
        <div className="dotted-line" />
        {open && (
          <DataTableStyled
            title={
              <CountryCardSelectStyled>
                <p>{accountsCountry[0]?.country_name_spa ?? ''}</p>
                <img
                  src={getFlag(accountsCountry[0].country_name_eng)}
                  alt={`Bandera de ${accountsCountry[0].country_name_spa}`}
                />
                <hr />
              </CountryCardSelectStyled>
            }
            columns={columns}
            data={accountsCountry}
          />
        )}
      </div>
    </>
  )
}
