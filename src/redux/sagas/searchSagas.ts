import { put, call, takeEvery } from 'redux-saga/effects';
import { LAUNCHES_ACTION } from '../../enums/actionsTypes';
import { apiCall } from '../api';
import * as actions from '../actions/launchesActions';
import * as slicesActions from '../slices/slices';
const urlExtra = '/launches/upcoming';

function* getLaunchesUpcomingApi(_action: ReturnType<typeof actions.getLaunchesUpcomingApi>) {
  yield put(slicesActions.setIsLoading(true))
  try {
    const { data } = yield call(apiCall, urlExtra, null, null, 'GET');

    yield put(slicesActions.setLaunchesUpcoming(data))
  } catch (error) {

    yield put({ type: LAUNCHES_ACTION.SEARCH_UPCOMING_LAUNCHES_ERROR, error });
  }

  yield put(slicesActions.setIsLoading(false))
}

export default function* searchSaga() {
  yield takeEvery(actions.getLaunchesUpcomingApi.type, getLaunchesUpcomingApi)
}
