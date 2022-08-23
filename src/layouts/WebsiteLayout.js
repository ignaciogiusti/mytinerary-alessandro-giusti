import Header from '../components/Header';
import Welcome from '../pages/Welcome';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import UnderConstruction from '../pages/UnderConstruction';
import Cities from '../pages/Cities';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function WebsiteLayout(props) {
    return (
        <>
            <BrowserRouter>
                {/* <Nav/> */}
                    <Header/>
                {/* { props.children } */}
                <Routes>
                    <Route path='/' element={<Welcome/>} />
                    <Route path='/cities' element={<Cities />} />
                    <Route path='*' element={<UnderConstruction />} />
                    {/* <Route path='/' element={<NewCity/>} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
