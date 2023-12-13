import React from 'react'
import { render } from '@testing-library/react-native'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
// @ts-ignore
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import {
  useFetchProductsQuery,
  useFetchMenuQuery,
} from '@/services/modules/product'

// Mock the Redux store
const mockStore = configureStore([])

// Mock the useFetchProductsQuery hook
jest.mock('@/services/modules/product', () => ({
  ...jest.requireActual('@/services/modules/product'),
  useFetchProductsQuery: jest.fn(),
  useFetchMenuQuery: jest.fn(),
}))

describe('HomeScreen', () => {
  it('renders HomeScreen correctly', async () => {
    const store = mockStore({
      cart: {
        items: [],
      },
    })

    // Mock the data returned by the useFetchProductsQuery hook
    const mockProductData = [
      { id: 1, name: 'Product 1', price: 20, img: 'test.jpg' },
      { id: 2, name: 'Product 2', price: 30, img: 'test.jpg' },
    ]

    // Mock the data returned by the useFetchMenuQuery hook
    const mockMenuData = [
      {
        name: 'NEW IN',
        img: 'https://cdn-media.prettylittlething.com/studio/mega-menu/desktop/12.11.20/newin.jpg',
        children: [
          {
            name: 'NEW IN',
            categories: ['View all', 'New in today', 'New in this week'],
          },
          {
            name: 'PLT RANGES',
            categories: ['New in plus', 'New in petite', 'New in tall'],
          },
        ],
      },
    ]

    // Set up mock implementations for the hooks
    // @ts-ignore
    useFetchProductsQuery.mockReturnValue({
      data: mockProductData,
      isSuccess: true,
      isLoading: false,
      isFetching: false,
    })
    // @ts-ignore
    useFetchMenuQuery.mockReturnValue({
      data: mockMenuData,
      isSuccess: true,
      isLoading: false,
      isFetching: false,
    })

    // Render the HomeScreen component
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>,
    )
    // Assertions based on the expected content in the component
    expect(getByText('New Arrival')).toBeTruthy()
    expect(getByText('Explore More')).toBeTruthy()
    expect(getByTestId('product-item-1')).toBeTruthy() // Adjust the test ID based on your ProductHomeItem component
    expect(getByTestId('product-item-2')).toBeTruthy()
  })
})
