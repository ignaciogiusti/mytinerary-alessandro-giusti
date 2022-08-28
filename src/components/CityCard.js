import '../styles/Cities.css';


export default function Cities() {

    const cities = [
        { url: "/img/buenosAires.jpg", city: "Buenos Aires", country: "Argentina", population: 3081000 },
        { url: "/img/rome.jpg", city: "Rome", country: "Italy", population: 2.873000 },
        { url: "/img/cancun.jpg", city: "Cancun", country: "Mexico", population: 888800 },
        { url: "/img/capetown.jpg", city: "Cape Town", country: "South Africa", population: 4618000 },
        { url: "/img/edinburgh.jpg", city: "Edinburgh", country: "Scotland", population: 527000 },
        { url: "/img/helsinki.jpg", city: "Helsinki", country: "Finland", population: 631700 },
        { url: "/img/madrid.jpg", city: "Madrid", country: "Spain", population: 3223000 },
        { url: "/img/milan.jpg", city: "Milan", country: "Italy", population: 1352000 },
        { url: "/img/paris.jpg", city: "Paris", country: "France", population: 2161000 },
        { url: "/img/RioDJ.png", city: "Rio De Janeiro", country: "Brasil", population: 6748000 },
        { url: "/img/Shanghai.jpg", city: "Shanghai", country: "China", population: 26320000 },
        { url: "/img/Zermatt-Switzerland.jpg", city: "Zermatt", country: "Switzerland", population: 5865 },
    ];

    const cityCard = (itemsMap) => (
        <div className='City-container'>
            <img className="City-img" src={itemsMap.url} />
            <h3 className='City-text text-center'>{itemsMap.city}</h3>
        </div>
    )
    return (
        <>
            <div className='citiesPageContainer'>
                {
                    cities.map(cityCard)
                }
            </div>
        </>
    )
}
