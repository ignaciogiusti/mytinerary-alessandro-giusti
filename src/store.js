import {configureStore} from '@reduxjs/toolkit'
import citiesSlice from './features/citiesSlice'
import citiesAPI from './features/citiesAPI'
import usersAPI from './features/usersAPI'

//instancia del store
export default configureStore ({
    reducer: {
        cities: citiesSlice,
        [citiesAPI.reducerPath]: citiesAPI.reducer,
        users: usersAPI,
        [usersAPI.reducerPath]: usersAPI.reducer
    },
})