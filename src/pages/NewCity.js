import InputNewCity from "../components/InputNewCity";
import '../styles/NewCity.css'


export default function NewCity() {
  return (
    <div className="Input-NewCity">
      <h1 className="text-light">Add your New City ¡HERE!</h1>
      <InputNewCity/>
      <button className="button-NewCity">Send</button>
    </div>
  )
}
