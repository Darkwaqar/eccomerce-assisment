import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
//@ts-ignore
import configureStore from 'redux-mock-store'
import Header from './Header'

// Mock the necessary modules and functions
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    toggleDrawer: jest.fn(),
  }),
}))

const mockStore = configureStore([])

describe('Header', () => {
  it('renders Header component correctly', () => {
    const store = mockStore({
      cart: {
        items: [
          { id: 1, name: 'Product 1', quantity: 2 },
          { id: 2, name: 'Product 2', quantity: 1 },
        ],
      },
    })

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    )

    // Replace the following assertions with the actual text/content expected in your component
    expect(getByText('Your Logo Here')).toBeTruthy()
    expect(getByTestId('cart-icon')).toBeTruthy()
    expect(getByText('3')).toBeTruthy() // Assuming there are 3 items in the cart
  })
})
