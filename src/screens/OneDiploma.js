import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DiplomaModel from '../components/DiplomaModel';
import Header from '../components/Header';
import {DiplomaAction} from '../store/action/CourseAction';

const OneDiploma = (props) => {
  const id = props.route.params && props.route.params.id;

  const dispatch = useDispatch();

  const DiplomaReducer = useSelector((state) => state.DiplomaReducer);
  const {loading, error, Diplomas} = DiplomaReducer;

  const OneDiploma =
    Diplomas && id && Diplomas.filter((x) => x.courseId === id);

  useEffect(() => {
    dispatch(DiplomaAction());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header props={props} />
      <ScrollView
        style={{
          marginBottom: 60,
        }}>
        <View>
          <Text style={styles.heading}>Diplomas</Text>
          <View style={styles.allCourses}>
            {loading ? (
              <ActivityIndicator size="large" color="#00ff00" />
            ) : error ? (
              <Text>{error}</Text>
            ) : (
              OneDiploma.map((item) => {
                return (
                  <DiplomaModel
                    key={item._id}
                    props={props}
                    image={item.image}
                    name={item.name}
                  />
                );
              })
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default OneDiploma;
