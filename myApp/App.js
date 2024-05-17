// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './components/Menu';
import GameModeSelection from './components/GameModeSelection';
import About from './components/About';
// Import your future PlayWithAI and PlayWithLocal components when you create them
// import PlayWithAI from './components/PlayWithAI';
import PlayWithLocal from './components/PlayWithLocal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="GameModeSelection" component={GameModeSelection} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="PlayWithLocal" component={PlayWithLocal} options={{ headerShown: false }} />
        {/* Add other screens like PlayWithAI and PlayWithLocal here */}
        {/* <Stack.Screen name="PlayWithAI" component={PlayWithAI} /> */}
        {/* <Stack.Screen name="PlayWithLocal" component={PlayWithLocal} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
