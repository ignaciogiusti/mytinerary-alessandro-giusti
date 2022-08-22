import Welcome from '../pages/Welcome';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Cities from '../pages/Cities';

export default function WebsiteLayout(props) {
    return (
        <>
            {/* <Nav/> */}
            {/*  <Header/> */}
            <Welcome/>
            { props.children }
            <Carousel/>
            <Cities/>
            <Footer/>
        </>
    )
}
