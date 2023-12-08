import { Colors, Text, TouchableOpacity, View } from 'react-native-ui-lib'

import { useFetchMenuQuery } from '@/services/modules/product'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import tw from 'twrnc'

interface tab {
  title: string
  active: boolean
}
export default function TabView() {
  const { data, isSuccess, isLoading, isFetching, error } =
    useFetchMenuQuery(null)

  const [tab, setTab] = useState<tab[]>()
  useEffect(() => {
    if (isSuccess && data) {
      setTab(
        data[0]?.children
          ?.flatMap((x, i) => x.categories)
          .map((x, i) => {
            return i == 0
              ? { title: x, active: true }
              : { title: x, active: false }
          }),
      )
    }
  }, [data, isSuccess])

  return (
    <View style={tw`flex-row items-center py-4`}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tab}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const newTab = tab?.map(t => ({
                ...t,
                active: t.title === item.title,
              }))
              setTab(newTab)
            }}
            style={tw`flex items-center justify-center  px-2`}
          >
            <Text Body_M Title_Active uppercase>
              {item.title}
            </Text>

            <View
              style={[
                tw`w-1 h-1`,
                {
                  transform: 'rotate(45deg)',
                  backgroundColor: `${
                    item.active ? Colors.Default : 'rgba(0,0,0,0.0)'
                  }`,
                },
              ]}
            />
          </TouchableOpacity>
        )}
      />

      {/* <View style={tw`flex items-center justify-center  w-20`}>
        <Text Body_M PlaceHolder>
          Apparel
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View>
      <View style={tw`flex items-center justify-center  w-20`}>
        <Text Body_M PlaceHolder>
          Dress
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View>
      <View style={tw`flex items-center justify-center  w-20`}>
        <Text Body_M PlaceHolder>
          Tshirt
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View>
      <View style={tw`flex items-center justify-center`}>
        <Text Body_M PlaceHolder>
          Bag
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View> */}
    </View>
  )
}
