import { View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Assets, Button, Image, Text } from 'react-native-ui-lib';
import Divider from '../Divider/Divider';

export default function Footer() {
  return (
    <View>
      <View style={tw`bg-white items-center gap-y-5 my-5`}>
        <View style={tw`flex-row justify-around w-[162px] `}>
          <Button iconSource={Assets.icons.Twitter} color="black" link />
          <Button iconSource={Assets.icons.Instagram} color="black" link />
          <Button iconSource={Assets.icons.YouTube} color="black" link />
        </View>
        <Divider />
        <Text style={{ fontFamily: 'TenorSans', fontSize: 16 }}>
          support@openui.design
        </Text>
        <Text style={{ fontFamily: 'TenorSans', fontSize: 16 }}>
          {' '}
          +60 825 876
        </Text>
        <Text style={{ fontFamily: 'TenorSans', fontSize: 16 }}>
          08:00 - 22:00 - Everyday
        </Text>
        <Divider />
        <View style={tw`flex-row justify-around w-[162px] gap-x-30`}>
          <Text
            style={{ fontFamily: 'TenorSans', fontSize: 16, lineHeight: 24 }}
          >
            About
          </Text>
          <Text
            style={{ fontFamily: 'TenorSans', fontSize: 16, lineHeight: 24 }}
          >
            Contact
          </Text>
          <Text
            style={{ fontFamily: 'TenorSans', fontSize: 16, lineHeight: 24 }}
          >
            Blog
          </Text>
        </View>
      </View>
      <View style={tw`bg-[#c4c4c4] h-[45px] items-center justify-center`}>
        <Text style={{ fontFamily: 'TenorSans', fontSize: 12, lineHeight: 24 }}>
          Copyright© OpenUI All Rights Reserved.
        </Text>
      </View>
    </View>
  );
}
