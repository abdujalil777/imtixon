import { configureStore } from '@reduxjs/toolkit'
import Reduxx from './Reduxx/Reduxx'
const store = configureStore({
   reducer: {
      counter: Reduxx
   }
})

export default store