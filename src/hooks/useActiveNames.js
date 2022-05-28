import useUserSearch from './useUsersSearch';
import usePeriodComparison from './periodComparison';
import useCountryActive from './useContryActive';
import useGetNameCountryActiveId from './useGetNameCountryActiveId';

export default function useActiveNames() {
  const users = useUserSearch();
  const isCountryFilterActive = useCountryActive()
  const {isPeriodComparisonActive, periods} = usePeriodComparison();  
  let accountsNames = []
  if(isPeriodComparisonActive){
    if(isCountryFilterActive){
      const countryName = useGetNameCountryActiveId()     
      
      accountsNames = periods.map(item=>item.name + ' ' + countryName)
    } else {
    accountsNames = periods.map(item=>item.name)
    }
  } else {
  accountsNames = [
    users.accountIdA.name,
    users.accountIdB?.name || '',
  ];
}
return accountsNames;
}