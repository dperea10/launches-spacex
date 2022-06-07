import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { PostType } from '../../interfaces/generalInterfaces'
import {clearStore} from '../actions/launchesActions'

export const getLaunchesUpcoming = createSlice({
  name: 'getLaunchesUpcoming',
  initialState: [] as Array<PostType>,
  reducers: {
    setLaunchesUpcoming: (_state: any, { payload }: PayloadAction<Array<PostType>>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => [],
  },
  
});

export const isLoading = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (_state: any, { payload }: PayloadAction<boolean>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
})

export const { setLaunchesUpcoming } = getLaunchesUpcoming.actions
export const { setIsLoading } = isLoading.actions

export const rootReducer = combineReducers({
    getLaunchesUpcoming: getLaunchesUpcoming.reducer,
    isLoading: isLoading.reducer,
  })

export type RootState = ReturnType<typeof rootReducer>;
