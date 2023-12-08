import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './../../services/modules/product/index'

export interface CartState {
  items: Array<Product & { quantity: number }>
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(
        item => item.id === action.payload.id,
      )

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)

      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload
      const product = state.items.find(item => item.id === id)

      if (product) {
        if (quantity === 0) {
          // Remove the item if the quantity becomes zero
          const index = state.items.findIndex(item => item.id === id)
          if (index !== -1) {
            state.items.splice(index, 1)
          }
        } else {
          product.quantity = quantity
        }
      }
    },
  },
})

export const { addItemToCart, removeFromCart, updateQuantity } =
  cartSlice.actions

export default cartSlice.reducer
