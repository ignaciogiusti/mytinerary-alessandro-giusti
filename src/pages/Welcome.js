import '../styles/Welcome.css'
import Footer from '../components/Footer';

export default function Welcome() {
  const title = "MyTinerary";
  const buttonText = "Get Started!";
  return (
    <>
      <div className='Main col space-evenly'>
        <h1 className='Welcome-Title text-light text-center text-border-black'>{title}</h1>
        <p className='Welcome-p text-light text-center'>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <button className='Welcome-Button text-light'>{buttonText}</button>
      </div>
    </>
  )
}
