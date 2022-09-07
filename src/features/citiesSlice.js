import { createSlice } from "@reduxjs/toolkit"
// import CityCard from '../components/CityCard'

export const citiesSlice = createSlice({
    name: 'cities',

    initialState: {
        cities: []
    },

    reducers: {
        fetchFromServer: (state) => {

            state.cities = data
            
        },

        fetchById: (state) => {}
    }  
    
})

export const { fetchFromServer } = citiesSlice.actions

export default citiesSlice.reducer
