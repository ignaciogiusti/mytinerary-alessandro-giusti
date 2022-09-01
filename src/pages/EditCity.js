import InputCity from "../components/InputCity";
import '../styles/InputCity.css';

const selectOption = [
    { option: 'Shanghai' },
    { option: 'Paris' },
    { option: 'Bariloche' }
]

const options = (selectCity) =>
    <option className="Input-NewCity">{selectCity.option}</option>

export default function EditCity() {
    return (
        <>
            <div className="Main-NewCity">
                <form className="Form-NewCity">
                    <h1 className="text-light">Edit a City here!</h1>
                    <label className="text-light col text-indent">Select a City
                    <select className='Input-NewCity flex-center'>
                        {selectOption.map(options)}
                        </select>
                    </label>
                    <InputCity />
                </form>
            </div>
        </>
    )
}