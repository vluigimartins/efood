import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Order } from '../../pages/Profile'

type CartState = {
  items: Order[]
  isOpen: boolean
  showDelivery: boolean
  showPayment: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  showDelivery: false,
  showPayment: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Order>) => {
      const order = state.items.find((items) => items.id === action.payload.id)

      if (!order) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
      state.showDelivery = false
      state.showPayment = false
    },
    setShowDelivery: (state, action: PayloadAction<boolean>) => {
      state.showDelivery = action.payload
      state.showPayment = false
    },
    setShowPayment: (state, action: PayloadAction<boolean>) => {
      state.showPayment = action.payload
      state.showDelivery = false
    }
  }
})

export const { add, remove, open, close, setShowDelivery, setShowPayment } =
  cartSlice.actions
export default cartSlice.reducer
