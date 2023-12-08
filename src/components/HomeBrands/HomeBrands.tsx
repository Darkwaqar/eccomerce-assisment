import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Divider from '../Divider/Divider';

const brands = [
  require('../../assets/brand/Prada.png'),
  require('../../assets/brand/Burberry.png'),
  require('../../assets/brand/Boss.png'),
  require('../../assets/brand/Catier.png'),
  require('../../assets/brand/Gucci.png'),
  require('../../assets/brand/Tiffany.png'),
];

export default function HomeBrands() {
  return (
    <View style={tw` gap-6 items-center justify-center`}>
      <Divider />
      <View style={tw`flex-wrap gap-y-5 flex-row items-center mx-4`}>
        {brands.map(item => (
          <View style={tw`w-1/3 h-2.5 px-5 `}>
            <Image
              source={item}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          </View>
        ))}
      </View>

      {/* <FlatList
        // horizontal
        numColumns={3}
        data={brands}
        contentContainerStyle={tw`gap-4 items-center`}
        renderItem={({ item }) => (
          <View style={tw`w-15 h-10 mx-4`}>
            <Image source={item} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
          </View>
        )}
      /> */}

      <Divider />
    </View>
  );
}
