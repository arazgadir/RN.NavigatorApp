import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movie from './MovieApp/Movie';
import Calculator from './calc/Calculator.js';

import {Tab1} from './Tab/Tabb';
import {HomeScreen, NewsScreen, EntertaimentScreen, ToolsScreen, SettingsScreen, ProfileScreen, AboutmeScreen} from './screens/screen';
 



const Stack1 = createStackNavigator();

function MyStack1() {
  return (
    <Stack1.Navigator>
      <Stack1.Screen name="Tools" component={ToolsScreen} />
      <Stack1.Screen name="Calculator" component={Calculator} />
    </Stack1.Navigator>
  );
}

const Stack2 = createStackNavigator();

function MyStack2() {
  return (
    <Stack2.Navigator>
      <Stack2.Screen name="go" component={EntertaimentScreen} />
      <Stack2.Screen name="Movie App" component={Movie} />
    </Stack2.Navigator>
  );
}





const Drawer = createDrawerNavigator();

export default function App() {
  return (
  

    <NavigationContainer>
     
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
        <Drawer.Screen name="Entertaiment" component={MyStack2} />
        <Drawer.Screen name="Tools" component={MyStack1} />
        <Drawer.Screen name="Aboutme" component={Tab1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}