import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import urlAPI from '../API'

const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: urlAPI
    }),

    // recibe search como parametro, que viene desde Cities.js cuando se llama al useGetAllCitiesQuery
    // en el ternario, pregunta; si search es negado, es decir, no existe (sea undefined o lo que sea), va a mandar por query un string vacio ("")
    // en caso de que si exista search, va a usar search, osea, lo que le está llegando
    endpoints: (builder) => ({
        createUser: builder.query({
            query: (user) => ({
                url: '/auth/signup/', 
                method: 'POST',
                body: user
            })
        })
    }),
})

export default usersAPI

export const {useCreateUserQuery} = usersAPI