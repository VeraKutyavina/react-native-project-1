
import { View } from 'react-native';
import React from 'react';
import UserMessageList from './components/UserMessageList';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';
import UserCall from './components/UserCall';
import Gallery from './components/Gallery';
import ProductCard from './components/ProductCard';
import Resume from "./components/Resume";
import AcceptedOrder from "./components/AcceptedOrder";

export default function App() {
  return (
    <View>
      {/*<UserCall />*/}
      {/*<UserList />*/}
      {/*<UserMessageList />*/}
      {/*<UserProfile />*/}
      {/*<Gallery />*/}
      {/*<ProductCard />*/}
      {/*<Resume />*/}
      <AcceptedOrder />
    </View>
  );
}
