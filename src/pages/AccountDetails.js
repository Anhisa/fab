import React from 'react';
import {MostRetweetedItems} from '../containers/MostRetweeted';
import {MostRepliedItems} from '../containers/MostReplied';
import {MostMentionedItems} from '../containers/MostMentioned';
// import { MonthlyTweetsItems } from '../containers/MonthlyTweets';


const AccountDetails = () => {

  return (
    <>
    <MostRetweetedItems />
    <MostRepliedItems />
    <MostMentionedItems />
    {/* <MonthlyTweetsItems /> */}
    </>


  );
}

export { AccountDetails };
