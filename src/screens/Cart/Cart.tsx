import React from 'react'
import { CartItem } from '@/components'
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../constants/colors'
import Animated from 'react-native-reanimated'
import tw from 'twrnc'
import { useFetchProductQuery } from '@/services/modules/product'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Assets,
  Button,
  Dialog,
  PanningProvider,
  Toast,
} from 'react-native-ui-lib'
import { CartState, addItemToCart } from '@/store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { View } from 'react-native-ui-lib'

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
