import InputNewCity from "../components/InputNewCity";
import '../styles/NewCity.css';

export default function NewCity() {
  return (
    <div className="Main-NewCity">
      <form className="Form-NewCity">
        <h1 className="text-light">Add a New City ¡HERE!</h1>
        <InputNewCity />
      </form>
    </div>
  )
}
