import '../styles/Carousel.css'

export default function Carousel() {

  const rangeItemStart = 0;
  const rangeItemEnd = 4;

  const carouselItemsContent = [
    { url: "/img/buenosAires.jpg", city: "Buenos Aires", country: "Argentina" },
    { url: "/img/venice.jpg", city: "Venice", country: "Italy" },
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
  ];

  const carouselSlide = (itemsMap) => (
    <div className='City-container'>
      <img className="City-img" src={itemsMap.url} />
      <h3 className='City-text text-center'>{itemsMap.city} - {itemsMap.country}</h3>
    </div>
  )

  return (
    <>
        <div className='Carousel-slide justify-center'>
          {
            carouselItemsContent.slice(rangeItemStart, rangeItemEnd).map(carouselSlide)
          }
        </div>
    </>
  )
}
