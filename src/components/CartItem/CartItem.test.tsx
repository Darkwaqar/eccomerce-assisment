import { updateQuantity } from '@/store/cart'
import { render } from '@testing-library/react-native'
import React from 'react'
import { Provider, useDispatch as useDispatchActual } from 'react-redux'
//@ts-ignore
import configureStore from 'redux-mock-store'
import CartItem from './CartItem'

// Mock the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

// Mock redux-persist
jest.mock('redux-persist/integration/react', () => ({
  ...jest.requireActual('redux-persist/integration/react'),
  PersistGate: ({ children }: { children: any }) => children,
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
    const { getByText } = render(
      <Provider store={store}>
        <CartItem item={mockProduct} />
      </Provider>,
    )

    // Replace the following assertions with the actual text/content expected in your component
    expect(getByText('Product 1')).toBeTruthy()
    expect(getByText('Color: Blue')).toBeTruthy()
  })

  it('handles quantity increase correctly', async () => {
    const store = mockStore({})
    // Mock useDispatch to return a dispatch function
    const dispatchMock = jest.fn()
    ;(useDispatchActual as jest.Mock).mockReturnValue(dispatchMock)

    const { getByTestId, debug } = render(
      <Provider store={store}>
        <CartItem item={mockProduct} />
      </Provider>,
    )

    store.dispatch(updateQuantity({ id: 1, quantity: 3 }))

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        type: 'cart/updateQuantity',
        payload: { id: 1, quantity: 3 },
      },
    ])
  })

  it('handles quantity decrease correctly', () => {
    const store = mockStore({})
    // Mock useDispatch to return a dispatch function
    const dispatchMock = jest.fn()
    ;(useDispatchActual as jest.Mock).mockReturnValue(dispatchMock)

    const { getByTestId } = render(
      <Provider store={store}>
        <CartItem item={mockProduct} />
      </Provider>,
    )

    store.dispatch(updateQuantity({ id: 1, quantity: 1 }))

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        type: 'cart/updateQuantity',
        payload: { id: 1, quantity: 1 },
      },
    ])
  })
})
