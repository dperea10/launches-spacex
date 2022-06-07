import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../redux/slices/slices'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
