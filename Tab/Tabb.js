import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, NewsScreen, EntertaimentScreen, ToolsScreen, SettingsScreen, ProfileScreen, AboutmeScreen} from '../screens/screen'

const Tab = createBottomTabNavigator();

export const Tab1 = () => {
  return (
    
      <Tab.Navigator
      tabBarOptions={{
        labelPosition: "beside-icon",
        activeTintColor: "white",
        style: {
        backgroundColor: "black",
      },
      labelStyle: {
        fontSize: 20,
      },
      tabStyle: {
        fontSize: 10,
      },
    }}
      >
      
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
  );
}


