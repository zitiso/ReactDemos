import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/myreducers'; 

const store = configureStore({
  reducer: counterReducer, 
});

export default store;