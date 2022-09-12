import InputCity from "../components/InputCity";
import '../styles/InputCity.css';
import axios from "axios";
import { useEffect, useState } from "react";


const options = (selectCity) =>
    <option className="Input-NewCity">{selectCity.option}</option>


export default function EditCity() {
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState ({})

    const getCities = async () => {
        try {
            const response = await axios.get('http://localhost:4000/cities/')
            if (response.data.success) {
                setCities(response.data.response)
                setSelectedCity(response.data.response[0])
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCities()
    }, [])
    const inputHandler = (city, cities) => {
        let foundCity = cities.find(obj => city === obj.city)
        setSelectedCity(foundCity)
    }

    return (
        <>
            <div className="Main-NewCity">
                <div className="Form-NewCity">
                    <h1 className="text-light">Edit a City here!</h1>
                    <label className="text-light col text-indent">Select a City
                        <select className='Input-NewCity flex-center' onChange={(e) => inputHandler(e.target.value, cities)}>
                            {cities?.map((city) => (
                                <option value={city.city} key={city._id}>{city.city}</option>
                            ))}
                        </select>
                    </label>
                    <InputCity city={selectedCity}/>
                </div>
            </div>
        </>
    )
}