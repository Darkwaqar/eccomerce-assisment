import React from 'react'
import {
  Dimensions,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { View, Text, Button, Assets } from 'react-native-ui-lib'
import COLORS from '../../constants/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import pets from '../../constants/pets'
import Animated from 'react-native-reanimated'
import { Divider, Header, ProductHomeItem, TabView } from '@/components'
import tw from 'twrnc'
import {
  useFetchMenuQuery,
  useFetchProductsQuery,
} from '@/services/modules/product'

const { height } = Dimensions.get('window')

const HomeScreen = () => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0)
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

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    padding: 20,
    justifyContent: 'center',
    // borderRadius: 18,
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    overflow: 'hidden',
  },
})
export default HomeScreen
