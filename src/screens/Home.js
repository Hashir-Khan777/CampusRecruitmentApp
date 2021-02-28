import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Courses from './Courses';

const Home = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
      }}>
      <Header props={props} />
      <ScrollView
        style={{
          marginBottom: 60,
        }}>
        <Slider />
        <Courses props={props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
