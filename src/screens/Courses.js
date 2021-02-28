import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CourseModel from '../components/CourseModel';
import {CourseAction} from '../store/action/CourseAction';

const Courses = ({props}) => {
  const dispatch = useDispatch();

  const CourseReducer = useSelector((state) => state.CourseReducer);
  const {loading, error, Courses} = CourseReducer;

  useEffect(() => {
    dispatch(CourseAction());
  }, [dispatch]);
  return (
    <View>
      <View>
        <Text style={styles.heading}>Our Courses</Text>
        <View style={styles.allCourses}>
          {loading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : error ? (
            <Text>{error}</Text>
          ) : (
            Courses.map((item) => {
              return (
                <CourseModel
                  key={item._id}
                  props={props}
                  image={item.image}
                  name={item.name}
                  id={item.courseId}
                />
              );
            })
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  allCourses: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default Courses;
