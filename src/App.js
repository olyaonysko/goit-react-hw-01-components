import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';

import userData from './user.json';
import statisticalData from './statistical-data.json';
import friendsData from './friends.json';
import transactionData from './transactions.json';

function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friendsData} />,
      <TransactionHistory items={transactionData} />
    </>
  );
}

export default App;
