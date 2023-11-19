import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Order } from '../../pages/Profile'

export type DeliveryData = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}

type CartState = {
  items: Order[]
  isOpen: boolean
  currentSection: string
  isCartVisible: boolean
  deliveryData: DeliveryData | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  currentSection: 'cart',
  isCartVisible: true,
  deliveryData: null
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
    clear: (state) => {
      state.items = []
    },
    changeSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload
    },
    setCartVisibility: (state, action: PayloadAction<boolean>) => {
      state.isCartVisible = action.payload
    },
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.deliveryData = action.payload
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  clear,
  changeSection,
  setCartVisibility,
  setDeliveryData
} = cartSlice.actions
export default cartSlice.reducer
