import '../styles/Carousel.css'
import SlideArrow from './Carousel/SlideArrow';
import axios from 'axios';
import { useEffect, useState } from 'react';
/* import CityCard from './CityCard'; */

export default function Carousel(props) {

  const itemRange = props.range;
  const slidesLimit = (props.slides * itemRange);
  const [rangeItemStart, setStart] = useState(0);
  const [rangeItemEnd, setEnd] = useState(rangeItemStart + itemRange);
  const [intervalTime, setIntervalTime] = useState();
  const interval = props.interval * 1000;

  /* const carouselItemsContent = [
    { url: "/img/buenosAires.jpg", city: "Buenos Aires", country: "Argentina" },
    { url: "/img/rome.jpg", city: "Rome", country: "Italy" },
    { url: "/img/cancun.jpg", city: "Cancun", country: "Mexico" },
    { url: "/img/capetown.jpg", city: "Cape Town", country: "South Africa" },
    { url: "/img/edinburgh.jpg", city: "Edinburgh", country: "Scotland" },
    { url: "/img/helsinki.jpg", city: "Helsinki", country: "Finland" },
    { url: "/img/madrid.jpg", city: "Madrid", country: "Spain" },
    { url: "/img/milan.jpg", city: "Milan", country: "Italy" },
    { url: "/img/paris.jpg", city: "Paris", country: "France" },
    { url: "/img/RioDJ.png", city: "Rio De Janeiro", country: "Brasil" },
    { url: "/img/Shanghai.jpg", city: "Shanghai", country: "China" },
    { url: "/img/Zermatt-Switzerland.jpg", city: "Zermatt", country: "Switzerland" },
  ]; */

    useEffect(() => {
        axios.get('http://localhost:4000/cities/') 
            .then(response => setCities(response.data))
    }, [])

  useEffect(() => {
    let slideTimer = setInterval(function () {
      nextSlide()
    }, interval)

    setIntervalTime(slideTimer)

    return () => clearInterval(intervalTime);
  }, [rangeItemStart])

  function previousSlide() {
    if (rangeItemStart >= itemRange) {
      setStart(rangeItemStart - itemRange)
      setEnd(rangeItemEnd - itemRange)
    } else {
      setStart(slidesLimit - itemRange)
      setEnd(slidesLimit)
    }
  }
  function nextSlide() {
    if (rangeItemStart < slidesLimit - itemRange) {
      setStart(rangeItemStart + itemRange)
      setEnd(rangeItemEnd + itemRange)
    } else {
      setStart(0)
      setEnd(itemRange)
    }
  }

  const [cities, setCities] = useState([])
  const cityCard = (itemsMap) => (
    <div className='City-container'>
        <img className="City-img" src={itemsMap.photo} />
        <h3 className='City-text text-center'>{itemsMap.city}</h3>
    </div>
)

  return (
    <>
      <div className='Carousel-bg'>
        <h5 className='Carousel-Title text-light text-center'>Popular My<span className='Title-Tinerary'>Tineraries</span></h5>
        <div className='Carousel-container'>
          <SlideArrow icon={<img className='Arrow-img' src='img/arrow-left-light.png' />} click={previousSlide} />
          <div>
            <div className='Carousel-slide justify-center'>
              {cities.slice(rangeItemStart, rangeItemEnd).map(cityCard)}
            </div>
          </div>
          <SlideArrow icon={<img className='Arrow-img' src='img/arrow-right-light.png' />} click={nextSlide} />
        </div>
      </div>
    </>
  )
}
