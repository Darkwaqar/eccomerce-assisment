import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { Startup } from '../screens'
import { useTheme } from '../hooks'
import MainNavigator from './Main'
import { useFlipper } from '@react-navigation/devtools'
import { ApplicationStackParamList } from '../../@types/navigation'
import { Assets, Colors, Typography } from 'react-native-ui-lib'
import StackNavigator from './StackNavigator'

const Stack = createNativeStackNavigator<ApplicationStackParamList>()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  Assets.loadAssetsGroup('icons', {
    Backward: require('../assets/icons/Backward.png'),
    Call: require('../assets/icons/Call.png'),
    Do_Not_Bleach: require('../assets/icons/Do_Not_Bleach.png'),
    Do_Not_Tumble_Dry: require('../assets/icons/Do_Not_Tumble_Dry.png'),
    Do_Not_Wash: require('../assets/icons/Do_Not_Wash.png'),
    Door_to_Door_Delivery: require('../assets/icons/Door_to_Door_Delivery.png'),
    Down: require('../assets/icons/Down.png'),
    Export: require('../assets/icons/Export.png'),
    Filter: require('../assets/icons/Filter.png'),
    Forward_Arrow: require('../assets/icons/Forward_Arrow.png'),
    Forward: require('../assets/icons/Forward.png'),
    Gallery: require('../assets/icons/Gallery.png'),
    Grid_view: require('../assets/icons/Grid_view.png'),
    Heart: require('../assets/icons/Heart.png'),
    Instagram: require('../assets/icons/Instagram.png'),
    Iron_Low_Temperature: require('../assets/icons/Iron_Low_Temperature.png'),
    ListView: require('../assets/icons/ListView.png'),
    Location: require('../assets/icons/Location.png'),
    Menu: require('../assets/icons/Menu.png'),
    Plus: require('../assets/icons/Plus.png'),
    Refresh: require('../assets/icons/Refresh.png'),
    Resize: require('../assets/icons/Resize.png'),
    Search: require('../assets/icons/Search.png'),
    Shipping: require('../assets/icons/Shipping.png'),
    Shopping_bag: require('../assets/icons/Shopping_bag.png'),
    Tag: require('../assets/icons/Tag.png'),
    Twitter: require('../assets/icons/Twitter.png'),
    Up: require('../assets/icons/Up.png'),
    Voucher: require('../assets/icons/Voucher.png'),
    YouTube: require('../assets/icons/YouTube.png'),
    divider: require('../assets/icons/divider.png'),
    Star: require('../assets/icons/Star.png'),
  })

  Colors.loadColors({
    Title_Active: '#000000',
    Body: '#333333',
    Label: '#555555',
    PlaceHolder: '#888888',
    Border: '#DEDEDE',
    Line: '#E0CFBA',
    'Input BG': '#F9F9F9',
    Background: '#F8F0E7',
    'Off white': '#FcFcFc',
    Default: '#DD8560',
    Dark: '#A8715A',
  })

  Typography.loadTypographies({
    Title: {
      fontSize: 18,
      lineHeight: 40,
      letterSpacing: 4,
      fontFamily: 'TenorSans',
      paddingTop: 10,
    },
    Price: { fontSize: 15, lineHeight: 24, fontFamily: 'TenorSans' },
    Body_M: { fontSize: 15, lineHeight: 24, fontFamily: 'TenorSans' },
    Sub_Title_14: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'TenorSans',
      letterSpacing: 2,
    },
    Body_S: { fontSize: 12, lineHeight: 18, fontFamily: 'TenorSans' },
    Body_L: { fontSize: 16, lineHeight: 24, fontFamily: 'TenorSans' },
    Sub_Title_16: { fontSize: 16, lineHeight: 24, fontFamily: 'TenorSans' },
  })

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Main" component={StackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
