import {configureStore} from '@reduxjs/toolkit'
import citiesSlice from './features/citiesSlice'

//instancia del store
export default configureStore ({
    reducer: {
        cities: citiesSlice 
    },
})