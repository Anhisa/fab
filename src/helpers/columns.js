import { BarContainer, IsVerified, UserAccount } from "../components/partsDataTable";

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
    wrap: true,
    maxWidth: '300px',
    minWidth: '150px',
    compact: true,
  },
  {
    name: 'Categoría',
    selector: (row) => row.categoría,
    sortable: true,
    id: 'categoria',
    grow: 2,
    wrap: true,
    maxWidth: '350px',
    minWidth: '200px',
    compact: true,
    omit: true,
  },
  {
    name: 'Verificado',
    selector: (row) => <IsVerified isVerified={row.isVerified} />,

    id: 'isVerified',
    grow: 2,
    wrap: false,
    center: true,
    width: '100px',
    
  },
  {
    name: 'Número de Tweets',
    selector: (row) => <BarContainer dataBar={row.tweets_number} />,
    sortable: true,
    id: 'tweetsNumber',
    grow: 2,
    wrap: false,
    maxWidth: '500px',
    width: '220px',
  },
];
