import React from 'react';
import {MostRetweetedItems} from '../containers/MostRetweeted';
import {MostRepliedItems} from '../containers/MostReplied';
import {MostMentionedItems} from '../containers/MostMentioned';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { useGetData } from '../hooks/useGetData';

const api =
  'https://fundacionandresbello.org/wp-json/fab/v1/official-accounts';

export const AccountDetails = ({match}) => {
  // const data = useGetData(api);
  // const account = data.data.find((account) => {
  //   return match.params.account === account.official_account
  // })

  // console.log(account);
  return (
    <>
    <HtMostUsedItems />
    <MostRetweetedItems />
    <MostRepliedItems />
    <MostMentionedItems />
    <MonthlyTweetsItems />
    </>


  );
}


