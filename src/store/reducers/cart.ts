import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Order } from '../../pages/Profile'

type CartState = {
  items: Order[]
  isOpen: boolean
  currentSection: string
  isCartVisible: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  currentSection: 'cart',
  isCartVisible: true
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
    },
    changeSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload
    },
    setCartVisibility: (state, action: PayloadAction<boolean>) => {
      state.isCartVisible = action.payload
    }
  }
})

export const { add, remove, open, close, changeSection, setCartVisibility } =
  cartSlice.actions
export default cartSlice.reducer
