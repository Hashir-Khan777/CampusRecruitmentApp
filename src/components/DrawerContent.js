import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Text} from 'react-native-paper';

const DrawerContent = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        position: 'relative',
        top: -5,
      }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userIfoSection}>
          <View>
            <Avatar.Image
              source={{
                uri: 'https://www.w3schools.com/bootstrap/img_avatar3.png',
              }}
            />
          </View>
          <View>
            <Text style={styles.avatarText}>Hello, Guest</Text>
          </View>
        </View>
        <View style={styles.home}>
          <DrawerItem
            label="Home"
            onPress={() => props.navigation.navigate('home')}
            labelStyle={styles.label}
          />
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.lookingForText}>What are you looking for ?</Text>
          <DrawerItem
            label="Courses"
            labelStyle={styles.label}
            onPress={() => props.navigation.navigate('courses')}
          />
          <DrawerItem
            label="Diplomas"
            labelStyle={styles.label}
            onPress={() => props.navigation.navigate('diplomas')}
          />
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.lookingForText}>Manage</Text>
          <DrawerItem label="Your Profile" labelStyle={styles.label} />
          <DrawerItem label="Show my courses" labelStyle={styles.label} />
          <DrawerItem label="Show my diplomas" labelStyle={styles.label} />
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.lookingForText}>Support</Text>
          <DrawerItem label="Cantact Us" labelStyle={styles.label} />
          <DrawerItem label="About Us" labelStyle={styles.label} />
        </View>
        <DrawerItem label="Logout" labelStyle={styles.label} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userIfoSection: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'blue',
    paddingVertical: 15,
  },
  home: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  lookingFor: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 15,
  },
  lookingForText: {
    color: 'grey',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 15,
  },
  label: {
    color: '#000',
  },
});

export default DrawerContent;
