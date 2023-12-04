import React, { memo } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'
import useQueryData from '../hooks/useQueryData'

export const CompAccountSelector = memo(function accountSelectorMemo ({ setAccounts }) {
  const [accountA, setAccountA] = React.useState('')
  const [accountB, setAccountB] = React.useState('')
  const { officialAccounts } = useQueryData()

  const handleChangeA = ({ target: { value } }) => {
    if (value === 'none') {
      setAccounts((prevState) => ({
        ...prevState,
        accountIdA: {
          id: '',
          name: ''
        }
      }))
      return setAccountA('')
    }
    setAccountA(value)
    const name = officialAccounts.find(item => item.official_account_id === value)

    setAccounts((prevState) => ({
      ...prevState,
      accountIdA: {
        id: value,
        name: name.official_account
      }
    }))
  }
  const handleChangeB = ({ target: { value } }) => {
    if (value === 'none') {
      setAccounts((prevState) => ({
        ...prevState,
        accountIdB: {
          id: '',
          name: ''
        }
      }))
      return setAccountB('')
    }
    const name = officialAccounts.find(item => item.official_account_id === value)
    setAccounts((prevState) => ({
      ...prevState,
      accountIdB: {
        id: value,
        name: name.official_account
      }
    }))
    setAccountB(value)
  }

  return (
    <div className="countSelector">
      <div className='title'>
      <h4>Accounts to compare</h4>
      </div>
      <div className="selector-wrap container-fluid">
        <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-filled-label">Account A</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label2"
            id="demo-simple-select-filled1"
            value={accountA}
            onChange={handleChangeA}
          >
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            {officialAccounts.map((item) => (
              <MenuItem
                key={`oa-${item.official_account_id}`}
                value={item.official_account_id}
                style={{ borderBottom: '1px dotted black' }}
              >
                <div >
                  <span><b>{item.country_name_eng}</b></span>
                  <h6>{item.official_account}</h6>
                  <span>{item.official_account_name_eng}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="container-fluid form"
          variant="filled"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-filled-label">Account B</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label2"
            id="demo-simple-select-filled2"
            value={accountB}
            onChange={handleChangeB}
          >
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            {officialAccounts.map((item) => (
              <MenuItem
                key={`oa-${item.official_account_id}`}
                value={item.official_account_id}
                style={{
                  borderBottom: '1px dotted black',
                  zIndex: '100'

                }}

              >
                <div>
                  <span><b>{item.country_name_eng}</b></span>
                  <h6>{item.official_account}</h6>
                  <span>{item.official_account_name_eng}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
})

CompAccountSelector.propTypes = {
  setAccounts: PropTypes.func.isRequired
}
