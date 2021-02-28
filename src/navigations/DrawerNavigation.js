import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import DrawerContent from '../components/DrawerContent';
import Diplomas from '../screens/Diplomas';
import AllCourses from '../screens/AllCourses';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="diplomas" component={Diplomas} />
      <Drawer.Screen name="courses" component={AllCourses} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
