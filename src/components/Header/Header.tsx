import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon, Colors, Assets, Button } from 'react-native-ui-lib'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { CartState } from '@/store/cart'

export default function Header() {
  const navigation = useNavigation()
  const items = useSelector((state: { cart: CartState }) => state.cart.items)
  return (
    <View
      style={tw`flex-row h-[60px] mx-4 items-center justify-between bg-[${Colors.white}]`}
    >
      <Button
        iconSource={Assets.icons.Menu}
        style={{ width: 24, height: 24, zIndex: 1 }}
        color="black"
        link
        onPress={
          // @ts-ignore
          navigation.toggleDrawer
        }
      />
      <View style={tw`absolute w-full items-center`}>
        {/* <Image
          source={require('../../assets/Logo.png')}
          style={tw`w-[150px] `}
          resizeMode="contain"
        /> */}
        <Text>Your Logo Here</Text>
      </View>

      <View style={tw`flex-row items-center justify-center gap-x-4`}>
        <Button
          iconSource={Assets.icons.Search}
          style={{ width: 24, height: 24 }}
          color="black"
          link
        />
        <View>
          <Button
            iconSource={Assets.icons.Shopping_bag}
            style={{ width: 24, height: 24 }}
            color="black"
            link
            //@ts-ignore
            onPress={() => navigation.navigate('CartScreen')}
          />
          <View
            style={tw`absolute top-0 -right-2 w-5 h-5 flex items-center justify-center bg-red-500  rounded-full`}
          >
            <Text style={tw`text-white text-xs`}>
              {items.reduce((x, i) => x + i.quantity, 0)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
