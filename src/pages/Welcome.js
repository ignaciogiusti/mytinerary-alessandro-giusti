import '../styles/Welcome.css'
import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';


export default function Welcome() {
  const titleMy = "My";
  const titleTinerary = "Tinerary";
  return (
    <>
      <div className='Main col space-evenly text-effect'>
        <div className='row justify-center h1-gap'>
          <img className='img-user' src="/img/logo.png" alt="logo" />
          <h1 className='Welcome-Title text-center'>{titleMy}<span className='Title-Tinerary'>{titleTinerary}</span></h1>
        </div>
        <p className='Welcome-p text-light text-center'>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <CallToAction linkTo='cities' />
      </div>
      <Carousel slides={3} interval={3} range={4} />
    </>
  )
}
