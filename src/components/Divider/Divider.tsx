import { Image, Assets } from 'react-native-ui-lib';
import React from 'react';
import tw from 'twrnc';

export default function Divider() {
  return <Image source={Assets.icons.divider} style={tw`w-[124px] h-[9px]`} />;
}
