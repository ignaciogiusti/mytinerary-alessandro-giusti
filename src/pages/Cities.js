import CityCard from '../components/CityCard';


export default function Cities() {
    return (
        <>
            <div className='Main-Cities'>
                <div className='Search-Cities'>
                    <input className='Input-Cities' type="text" name="" placeholder=' Search by city...' />
                </div>
                <CityCard />
            </div>
        </>
    )
}
