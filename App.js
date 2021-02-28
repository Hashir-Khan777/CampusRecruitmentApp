/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import StackNavigation from './src/navigations/StackNavigation';
import Store from './src/store/Store';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Provider store={Store}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
