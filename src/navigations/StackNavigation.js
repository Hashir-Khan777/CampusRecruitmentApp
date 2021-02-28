import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import Signin from '../screens/Signin';
import DrawerNavigation from './DrawerNavigation';
import Diplomas from '../screens/Diplomas';
import OneDiploma from '../screens/OneDiploma';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="home"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="diplomas"
        component={Diplomas}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="onediploma"
        component={OneDiploma}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
