import { useFetchProductQuery } from '@/services/modules/product'
import { CartState, addItemToCart } from '@/store/cart'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import Animated from 'react-native-reanimated'
import { Assets, Button, Toast, View } from 'react-native-ui-lib'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import COLORS from '../../constants/colors'

const DetailsScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const id = route.params
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()
  const items = useSelector((state: { cart: CartState }) => state.cart.items)
  // @ts-ignore
  const { data, isSuccess, isLoading, isFetching } = useFetchProductQuery(id)
  if (!data) return <ActivityIndicator />

  const handleAddToCart = () => {
    // Dispatch the addItemToCart action with the product as the payload
    dispatch(addItemToCart(data))
    setIsVisible(true)
  }
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {/* Render  Header */}
      <Animated.Image
        sharedTransitionTag={`${data.id}-image`}
        resizeMode="contain"
        source={{ uri: data?.img }}
        style={{
          height: 400,
          width: '100%',
          position: 'absolute',
        }}
      />
      <View style={style.header}>
        <Icon
          name="arrow-left"
          size={28}
          color={COLORS.dark}
          onPress={navigation.goBack}
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
            style={tw`absolute top-0 -right-2 w-4 h-4 flex items-center justify-center bg-red-500  rounded-full`}
          >
            <Text style={tw`text-white text-xs`}>
              {items.reduce((x, i) => x + i.quantity, 0)}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 300,
          paddingBottom: 100,
        }}
      >
        <Animated.View
          style={style.detailsContainer}
          sharedTransitionTag={`${data.id}-name`}
        >
          {/*
            {/* render name */}

          <Text
            style={{
              fontSize: 20,
              color: COLORS.dark,
              fontWeight: 'bold',
            }}
          >
            {data.name}
          </Text>

          {/* Render color */}

          <Text style={{ fontSize: 12, color: COLORS.dark }}>
            Color: {data.colour}
          </Text>

          {/* Render location and icon */}
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <Icon name="currency-usd" color={COLORS.primary} size={20} />
            <Text style={{ fontSize: 16, marginLeft: 5 }}>{data.price}</Text>
          </View>
        </Animated.View>

        <View style={tw`bg-white`}>
          {/* Comment container */}

          {Array(4)
            .fill('')
            .map((x, i) => (
              <View
                key={i}
                style={{
                  marginTop: i == 0 ? 80 : 20,
                  justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <View>
                  {/* Render user image , name and date */}
                  <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Image
                      source={{ uri: 'https://picsum.photos/200/300' }}
                      style={{ height: 40, width: 40, borderRadius: 20 }}
                    />
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                      <Text
                        style={{
                          color: COLORS.dark,
                          fontSize: 12,
                          fontWeight: 'bold',
                        }}
                      >
                        JANE GARY
                      </Text>
                      <Text
                        style={{
                          color: COLORS.grey,
                          fontSize: 11,
                          fontWeight: 'bold',
                          marginTop: 2,
                        }}
                      >
                        Buyer
                      </Text>
                    </View>
                    <Text style={{ color: COLORS.grey, fontSize: 12 }}>
                      May 25, 2020
                    </Text>
                  </View>
                  <Text style={style.comment}>
                    My job requires moving to another country. I don't have the
                    opputurnity to take the cat with me. I am looking for good
                    people who will shelter my Lily.
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
      {/* Render footer */}
      <View style={style.footer}>
        <View style={style.iconCon}>
          <Icon name="heart-outline" size={22} color={COLORS.white} />
        </View>
        <TouchableOpacity style={tw`flex-1 h-13`} onPress={handleAddToCart}>
          <View style={style.btn}>
            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Toast
        visible={isVisible}
        position={'top'}
        autoDismiss={1000}
        onDismiss={() => setIsVisible(prev => !prev)}
      >
        <View
          flex
          padding-10
          style={[
            { backgroundColor: COLORS.light },
            tw`items-center gap-2 p-2 pt-4`,
          ]}
        >
          <Text style={tw`font-bold `}>{data.name}</Text>
          <Text style={tw`font-bold text-xl`}>Added to cart</Text>
          {/* @ts-ignore */}
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Text style={tw`font-bold text-xl underline`}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </Toast>
    </View>
  )
}

const style = StyleSheet.create({
  detailsContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    bottom: -60,
    borderRadius: 18,
    padding: 20,
    justifyContent: 'center',
    zIndex: 1,
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    // top: 30,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    zIndex: 1,
  },
})
export default DetailsScreen
