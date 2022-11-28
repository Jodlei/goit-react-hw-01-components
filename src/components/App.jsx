import userData from 'user.json';
import statisticsData from 'data.json';
import friendsData from 'friends.json';
import transactionsData from 'transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/Friends/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics stats={statisticsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
