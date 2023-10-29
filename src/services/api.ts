import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getOrder: builder.query<Restaurantes, string>({
      query: (id) => `/${id}`
    })
  })
})
export const { useGetOrderQuery } = api
export default api
