import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getLaunchesUpcomingApi, clearStore } from '../redux/actions/launchesActions'

const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators({ getLaunchesUpcomingApi, clearStore }, dispatch)
}

export default useActions
