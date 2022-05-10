import React from 'react';
import { useGetMonthlyTweets } from '../hooks/useGetMonthyTweets';

const MonthlyTweetsItem = ({ monthlyTweet }) => {
  return (
    <div>
      <p>{monthlyTweet.month}</p>
      <p>{parseInt(monthlyTweet.tweets_number)}</p>
    </div>
  );
};

export { MonthlyTweetsItem };
