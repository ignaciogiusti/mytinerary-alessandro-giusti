import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const citiesAPI = createApi({
    reducerPath: "citiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    // recibe search como parametro, que viene desde Cities.js cuando se llama al useGetAllCitiesQuery
    // en el ternario, pregunta; si search es negado, es decir, no existe (sea undefined o lo que sea), va a mandar por query un string vacio ("")
    // en caso de que si exista search, va a usar search, osea, lo que le está llegando
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (search) => `/cities/?search=${!search ? "" : search}`
        })
    }),
})

export default citiesAPI

export const {useGetAllCitiesQuery} = citiesAPI
