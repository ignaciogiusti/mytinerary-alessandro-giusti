import Header from '../components/Header';
import Welcome from '../pages/Welcome';
import Footer from '../components/Footer';
import UnderConstruction from '../pages/UnderConstruction';
import Cities from '../pages/Cities';
import CityDetails from '../pages/CityDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import NewCity from '../pages/NewCity';
import EditCity from '../pages/EditCity'
import Bar from '../components/Bar';
import Carousel from '../components/Carousel';


export default function WebsiteLayout(props) {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Bar/>
                {/* { props.children } */}
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/cities' element={<Cities />} />
                    <Route path='*' element={<UnderConstruction />} />
                    <Route path='/newcity' element={<NewCity />} />
                    <Route path='/editcity' element={<EditCity />} />
                    <Route path='/citydetails/:id' element={<CityDetails />} />
                    <Route path='/citydetails/:id' element={<Carousel />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
