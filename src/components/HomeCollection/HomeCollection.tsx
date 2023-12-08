import { View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Text, Image } from 'react-native-ui-lib';

export default function HomeCollection() {
  return (
    <View style={tw`gap-6`}>
      <Text Title style={tw`uppercase self-center`}>
        Collections
      </Text>
      <Image
        style={tw`w-full`}
        source={require('../../assets/collection1.png')}
      />
      <View style={tw`items-center justify-center p-2`}>
        <Image source={require('../../assets/collection2.png')} />
      </View>
    </View>
  );
}
