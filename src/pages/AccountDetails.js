import React from 'react';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { HtMostUsedItems } from '../containers/HtMostUsed';
import { MostRetweetedItem2 } from '../components/MostRetweetedItem2';
import { useParams } from 'react-router';



export const AccountDetails = () => {
  const user = useParams()
  console.log(user)
  return (
    <>
      {/* <HtMostUsedItems /> */}
      <MostRetweetedItems />
      {/* <MostRetweetedItem2 /> */}
      {/* <MostRepliedItems /> */}
      {/* <MostMentionedItems /> */}
      {/* <MonthlyTweetsItems /> */}
    </>
  );
};

