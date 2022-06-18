import { BarContainer, IsVerified, UserAccount } from '../components/partsDataTable'
import React from 'react'

export const columns = [
  {
    name: 'Usuario/ Nombre cuenta',
    selector: (row) => (
      <UserAccount
        userAccount={row.userAccount}
        userAccountDesc={row.userAccountDesc}
      />
    ),
    sortable: true,
    sortFunction: (a, b) => {
      if (a.userAccount < b.userAccount) {
        return -1
      }
      if (a.userAccount > b.userAccount) {
        return 1
      }
      return 0
    },
    wrap: true,
    maxWidth: '350px',
    minWidth: '125px'

  },
  {
    name: 'Categoría',
    selector: (row) => <b>{row.categoría}</b>,
    sortable: true,
    sortFunction: (a, b) => {
      if (a.categoría < b.categoría) {
        return -1
      }
      if (a.categoría > b.categoría) {
        return 1
      }
      return 0
    },
    compact: true,
    id: 'categoria',
    wrap: true,
    maxWidth: '250px',
    minWidth: '100px',
    omit: window.innerWidth < 1108
  },
  {
    name: 'Verificado',
    selector: (row) => <IsVerified isVerified={row.isVerified} />,
    compact: true,
    id: 'isVerified',
    wrap: false,
    center: true,
    minWidth: '5px',
    maxWidth: '100px'
  },
  {
    name: 'Número de Tweets',
    selector: (row) => <BarContainer dataBar={row.tweets_number} />,
    id: 'tweetsNumber',
    maxWidth: '450px',
    minWidth: '100px',
    sortable: true
  }
]
