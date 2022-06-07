import saga from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { configureStore } from '@reduxjs/toolkit'

import searchSaga from '../sagas/searchSagas';
import {rootReducer} from '../slices/slices'

function* rootSaga() {
    yield all([searchSaga()])
  }

const sagaMiddleware = saga()

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
      sagaMiddleware
    ]
  })

sagaMiddleware.run(rootSaga)
