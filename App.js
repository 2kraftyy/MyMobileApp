import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './screens/SignInScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import ImageScreen from './screens/ImageScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
import ContactFormScreen from './screens/ContactFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Images" component={ImageScreen} />
        <Stack.Screen name="Video" component={VideoPlayerScreen} />
        <Stack.Screen name="Contact" component={ContactFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
