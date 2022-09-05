import InputCity from "../components/InputCity";
import '../styles/InputCity.css';

export default function NewCity() {
  return (
    <div className="Main-NewCity">
      <form className="Form-NewCity">
        <h1 className="text-light">Add a City here!</h1>
        <InputCity />
      </form>
    </div>
  )
}
