import { Divider, Header, ProductHomeItem, TabView } from '@/components'
import { useFetchProductsQuery } from '@/services/modules/product'
import React from 'react'
import { Dimensions, FlatList } from 'react-native'
import { Assets, Button, Text, View } from 'react-native-ui-lib'
import tw from 'twrnc'
import COLORS from '../../constants/colors'

const { height } = Dimensions.get('window')

const HomeScreen = () => {
  const { data, isSuccess, isLoading, isFetching } = useFetchProductsQuery(null)

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header />
      <View style={tw`flex justify-center items-center `}>
        <Text Title Title_Active style={tw`uppercase`}>
          New Arrival
        </Text>
        <Divider />
      </View>
      <TabView />
      <FlatList
        nestedScrollEnabled
        ListFooterComponent={
          <Button
            label="Explore More"
            Body_L
            link
            style={tw`mx-4  self-center items-center justify-center w-[155px] h-[48px]`}
            color="black"
            iconStyle={tw`w-[18px] h-[18px]`}
            iconSource={Assets.icons.Forward_Arrow}
            iconOnRight
          />
        }
        contentContainerStyle={tw`gap-2 items-center`}
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductHomeItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default HomeScreen
