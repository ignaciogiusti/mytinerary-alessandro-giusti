import CityCard from '../components/CityCard';
import { Link as LinkRouter } from 'react-router-dom';


export default function Cities() {
    return (
        <>
            <div className='Main-Cities'>
                <div className='Search-Cities'>
                    <input className='Input-Cities' type="text" name="" placeholder=' Search by city...' />
                </div>
                <LinkRouter to='/*' className='decoration-none'><CityCard /></LinkRouter>
            </div>
        </>
    )
}
