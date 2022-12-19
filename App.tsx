import React from 'react';
import { observer } from 'mobx-react-lite'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import CityPage from './components/CityPage';

const Stack = createNativeStackNavigator();

const AppWeather = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomePage {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CityPage">
          {props => <CityPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
})

export default AppWeather;


