import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Header = ({props}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.openDrawerContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.openDrawer()}>
            <View style={styles.openDrawer}></View>
            <View style={styles.openDrawer}></View>
            <View style={styles.openDrawer}></View>
          </TouchableOpacity>

          <View>
            <Text style={styles.headerText}>I.T College</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  openDrawer: {
    width: 25,
    height: 4,
    backgroundColor: '#000',
    marginVertical: 2,
    borderRadius: 5,
  },
  openDrawerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#fff',
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  headerText: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
