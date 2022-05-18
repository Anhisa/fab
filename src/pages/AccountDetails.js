import React from 'react';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
<<<<<<< HEAD
import { AccountInfo } from '../components/AccountInfo';
=======
import { useParams } from 'react-router';


>>>>>>> 0bf0211b7fc5c4aebeee128030574e1d926dfe99

export const AccountDetails = () => {
  const user = useParams()
  console.log(user)
  return (
    <>
      {/* <HtMostUsedItems /> */}
      <AccountInfo />
      <MostRetweetedItems />
      <MostRetweetedItem2 />
      {/* <MostRepliedItems /> */}
      {/* <MostMentionedItems /> */}
      {/* <MonthlyTweetsItems /> */}
    </>
  );
};
