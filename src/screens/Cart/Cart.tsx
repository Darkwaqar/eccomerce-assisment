import { CartItem } from '@/components'
import { CartState } from '@/store/cart'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Assets, Button, View } from 'react-native-ui-lib'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import COLORS from '../../constants/colors'

export default function Cart() {
  const items = useSelector((state: { cart: CartState }) => state.cart.items)
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`flex-row justify-between m-4 `}>
        <Icon
          name="arrow-left"
          size={28}
          color={COLORS.dark}
          onPress={navigation.goBack}
        />
        <Text style={tw`font-bold text-lg`}>Cart</Text>
        <View>
          <Button
            iconSource={Assets.icons.Shopping_bag}
            style={{ width: 24, height: 24 }}
            color="black"
            link
            // @ts-ignore
            onPress={() => navigation.navigate('CartScreen')}
          />
          <View
            style={tw`absolute top-0 -right-2 w-4 h-4 flex items-center justify-center bg-red-500  rounded-full`}
          >
            <Text style={tw`text-white text-xs`}>
              {items.reduce((x, i) => x + i.quantity, 0)}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={tw`flex`}>
        {items.map(item => (
          <CartItem item={item} />
        ))}
      </ScrollView>
      <TouchableOpacity style={tw`h-13`}>
        <View
          style={tw`bg-[${COLORS.primary}] flex-1 items-center justify-center rounded-lg mx-2`}
        >
          <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
            Checkout Total :{' '}
            {items.reduce((x, i) => x + i.quantity * i.price, 0)} $
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
