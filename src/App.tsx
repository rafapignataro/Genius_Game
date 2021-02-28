import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import MaxScoreProvider from './contexts/maxScore';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => (
  <MaxScoreProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </MaxScoreProvider>
);

export default App;
