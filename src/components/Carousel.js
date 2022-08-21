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
        <div className='Carousel-slide space-evenly'>
          {
            carouselItemsContent.slice(rangeItemStart, rangeItemEnd).map(carouselSlide)
          }
        </div>
      {/*----------------------------------------------------------------------------*/}
      {/* <section class="carousel">
        <ol class="carousel__viewport">
          <li id="carousel__slide1"
            tabindex="0"
            class="carousel__slide">
            <div class="carousel__snapper">
              <a href="#carousel__slide4"
                class="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2"
                class="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2"
            tabindex="0"
            class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3"
            tabindex="0"
            class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4"
              class="carousel__next">Go to next slide</a>
          </li>
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1"
                class="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2"
                class="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide 3</a>
            </li>
          </ol>
        </aside>
      </section> */}
      {/*------------------------------------------------------------------------------*/}
    </>
  )
}
