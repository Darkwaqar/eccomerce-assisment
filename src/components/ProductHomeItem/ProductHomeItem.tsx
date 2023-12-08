import { Product } from '@/services/modules/product'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ImageSourcePropType, TouchableOpacity } from 'react-native'
import { View, Image, Button, Assets, Text, Colors } from 'react-native-ui-lib'
import tw from 'twrnc'

export default function ProductHomeItem({ item }: { item: Product }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        navigation.navigate('DetailsScreen', item.id)
      }}
    >
      <View style={tw`w-[168px] h-[285px] mx-2`}>
        <View style={tw`w-full h-[220px]`}>
          <Image
            source={{ uri: item.img }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
          />
          {/* <View
            style={tw`absolute top-4 left-4 h-[27px] w-[27px] flex items-center justify-center rounded-full bg-[${Colors.Default}]`}
          >
            <Text
              style={{
                fontFamily: 'TenorSans',
                fontSize: 12,
                // lineHeight: 18,
                color: Colors.white,
                textAlign: 'center',
              }}
            >
              new
            </Text>
          </View> */}
        </View>
        <View style={tw`gap-y-1 px-1 items-center`}>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: 'TenorSans',
              fontSize: 12,
              lineHeight: 18,
              color: Colors.Label,
              textAlign: 'center',
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 15,
              lineHeight: 24,
              color: Colors.Default,
            }}
          >
            ${item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
