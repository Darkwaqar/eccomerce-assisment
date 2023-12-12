import { Product } from '@/services/modules/product'
import { addItemToCart, updateQuantity } from '@/store/cart'
import React from 'react'
import {
  View,
  Image,
  Button,
  Assets,
  Text,
  Colors,
  Stepper,
} from 'react-native-ui-lib'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'

export default function CartItem({
  item,
}: {
  item: Product & { quantity: number }
}) {
  console.log(item)
  const dispatch = useDispatch()

  const handleQuantityChange = (quantity: number) => {
    dispatch(updateQuantity({ id: item.id, quantity }))
  }
  return (
    <View style={tw`w-[313px] h-[134px] flex-row mt-4`}>
      <View style={tw`w-[100px] h-[134px]`}>
        <Image
          source={{ uri: item.img }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>
      <View style={tw`gap-y-4 px-1`}>
        <View style={tw`gap-y-2`}>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 14,
              lineHeight: 20,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: Colors['Title Active'],
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 12,
              lineHeight: 18,
              textTransform: 'capitalize',
            }}
          >
            Color: {item.colour}
          </Text>
        </View>
        <View>
          <Stepper
            minValue={0}
            maxValue={10}
            small
            value={item.quantity}
            onValueChange={handleQuantityChange}
            testID="stepper-input"
          />
        </View>
        <Text
          style={{
            fontFamily: 'TenorSans',
            // fontSize: 15,
            // lineHeight: 24,
            color: Colors.Default,
          }}
        >
          ${item.quantity} x {item.price} = ${item.quantity * item.price}
        </Text>
      </View>
    </View>
  )
}
