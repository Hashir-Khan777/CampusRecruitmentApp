import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';

const Slider = () => {
  return (
    <View>
      <Image
        source={{
          uri:
            'https://www.clipartkey.com/mpngs/m/312-3127195_ladder-golf-clip-art.png',
        }}
        style={{
          width: '100%',
          height: 200,
        }}
      />
    </View>
  );
};

export default Slider;
