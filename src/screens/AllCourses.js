import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import Courses from './Courses';

const AllCourses = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
      }}>
      <Header props={props} />
      <ScrollView
        style={{
          marginBottom: 70,
        }}>
        <Courses props={props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCourses;
