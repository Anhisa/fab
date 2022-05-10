import React from 'react';
import { MonthlyTweetsItem } from '../components/MonthlyTweetsItem';
import { useGetMonthlyTweets } from '../hooks/useGetMonthyTweets';

const api = 'https://fundacionandresbello.local/wp-json/fab/v1/monthly-tweets';

const MonthlyTweetsItems = () => {
  const monthlyTweets = useGetMonthlyTweets(api);
  return (
    <section>
      <div>
        {monthlyTweets.map((monthlyTweet) => (
            <MonthlyTweetsItem monthlyTweets={monthlyTweets} key={monthlyTweet.monthly_tweets_id} />
          ))}
      </div>
    </section>
  );
};

export { MonthlyTweetsItems };
