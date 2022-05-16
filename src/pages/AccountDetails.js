import React from 'react';
import { MostRetweetedItems } from '../containers/MostRetweeted';
import { MostRepliedItems } from '../containers/MostReplied';
import { MostMentionedItems } from '../containers/MostMentioned';
import { MonthlyTweetsItems } from '../containers/MonthlyTweets';
import { HtMostUsedItems } from '../containers/HtMostUsed';

export const AccountDetails = () => {
  return (
    <>
      {/* <HtMostUsedItems /> */}
      <MostRetweetedItems />
      {/* <MostRepliedItems /> */}
      {/* <MostMentionedItems /> */}
      {/* <MonthlyTweetsItems /> */}
    </>
  );
};
