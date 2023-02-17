import { configureStore } from '@reduxjs/toolkit'
import dialogStateSliceReducer from './components/kanjiDialogStateSlice'

export default configureStore({
  reducer: {
    dialog: dialogStateSliceReducer,
  }
})
