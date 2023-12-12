import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
//@ts-ignore
import configureStore from 'redux-mock-store'
import CartItem from './CartItem'
import { updateQuantity } from '@/store/cart'
import { useDispatch } from 'react-redux'

// Mock the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

const mockStore = configureStore([])

describe('CartItem', () => {
  const mockProduct = {
    id: 1,
    name: 'Product 1',
    colour: 'Blue',
    img: 'https://example.com/image.jpg',
    quantity: 2,
    price: 20,
  }

  it('renders CartItem component correctly', () => {
    const store = mockStore({})
    const { getByText, debug } = render(
      <Provider store={store}>
        <CartItem item={mockProduct} />
      </Provider>,
    )

    // Replace the following assertions with the actual text/content expected in your component
    expect(getByText('Product 1')).toBeTruthy()
    expect(getByText('Color: Blue')).toBeTruthy()
  })
})
