import {configureStore} from '@reduxjs/toolkit'
import citiesSlice from './features/citiesSlice'
import citiesAPI from './features/citiesAPI'

//instancia del store
export default configureStore ({
    reducer: {
        cities: citiesSlice,
        [citiesAPI.reducerPath]: citiesAPI.reducer
    },
})