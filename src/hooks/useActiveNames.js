import useUserSearch from './useUsersSearch';
import usePeriodComparison from './periodComparison';
import useCountryActive from './useContryActive';
import useGetNameCountryActiveId from './useGetNameCountryActiveId';

export default function useActiveNames(context) {
  console.log('context', context);
  if(context.userOfficialName){
    return [context.userOfficialName];
  }
  const {accounts:{accountIdA, accountIdB}} = context  
  const users = {accountIdA, accountIdB};
  const {isCountryFilterActive} = context
  const {periodComparison, isPeriodComparisonActive} = context;
  const periods = [periodComparison.periodA, periodComparison.periodB];
  
  let accountsNames = []
  if(isPeriodComparisonActive){
    if(isCountryFilterActive){
      const {country_id:{name}} = context;  
      const countryName = name
      
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