import Header from '../components/Header';
import Welcome from '../pages/Welcome';
import Footer from '../components/Footer';
import UnderConstruction from '../pages/UnderConstruction';
import Cities from '../pages/Cities';
import CityDetails from '../pages/CityDetails';
import ScrollToTop from '../components/ScrollToTop';
import NewCity from '../pages/NewCity';
import EditCity from '../pages/EditCity'
import Bar from '../components/Bar';
import Carousel from '../components/Carousel';
import MyTinerary from '../pages/MyTinerary'
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import NewItinerary from '../pages/NewItinerary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function WebsiteLayout(props) {
    
    const [logged, setLogged] = useState(false)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        console.log("useeffect???'")
        JSON.parse(localStorage.getItem('user')) && setLogged(true)
        JSON.parse(localStorage.getItem('user'))?.role==='admin' && setAdmin(true)
      }, [])

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Bar />
                {/* { props.children } */}
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/cities' element={<Cities />} />
                    <Route path='*' element={<UnderConstruction />} />
                    <Route path='/newcity' element={admin? <NewCity /> : <Welcome />} />
                    <Route path='/editcity' element={admin? <EditCity /> : <Welcome />} />
                    <Route path='/citydetails/:id' element={<CityDetails />} />
                    <Route path='/citydetails/:id' element={<Carousel />} />
                    <Route path='/mytinerary/auth/:id' element={<MyTinerary />} />
                    <Route path='/newitinerary' element={logged? <NewItinerary /> : <Welcome />} />
                    <Route path='/auth/signin' element={logged? <Welcome /> : <SignIn />} />
                    <Route path='/auth/profile' element={logged? <Profile /> : <Welcome />} />
                    <Route path='/auth/signup' element={<SignUp />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}