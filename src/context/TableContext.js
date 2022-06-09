import { createContext } from 'react';
const initialStateCategories = {
  mostRetweeted: true,
  mostHashtags: true,
  mostMentioned: true,
  mostReplied: true,
  monthlyTweets: true,
};
const mapManagment =
  {
    country_id: ''
  }

const booleanValues = 
  {
    isPeriodComparisonActive: false,
    isCountryFilterActive: false,
  }
const accounts =
  {
    accountIdA: {
      id: '',
      name: '',
    },
    accountIdB: {
      id: '',
      name: '',
    },
  }
const period =  {
  startDate: 1,
  endDate: 4,
}
const periodComparison = {
  periodA: {
    id: '',
    name: '',
  },
  periodB: {
    id: '',
    name: '',
  },
}


export const TableContext = createContext({});

export const initialState = {
  categories: initialStateCategories,
  mapManagment: mapManagment,
  booleanValues: booleanValues,
  accounts: accounts,
  period: period,
  periodComparison: periodComparison,
}
