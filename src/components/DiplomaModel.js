import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const DiplomaModel = (props) => {
  return (
    <View>
      <View style={styles.card}>
        <TouchableOpacity activeOpacity={1}>
          <View>
            <Image
              style={styles.departImage}
              source={{
                uri: props.image,
              }}
            />
          </View>
          <View>
            <Text style={styles.departText}>{props.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: 160,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  departImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  departText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default DiplomaModel;
