import Welcome from '../pages/Welcome';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

export default function WebsiteLayout(props) {
    return (
        <>
            {/* <Nav/> */}
            {/*  <Header/> */}
            <Welcome/>
            { props.children }
            <Carousel/>
            <Footer/>
        </>
    )
}
