import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLoaderData } from 'react-router-dom';
import Services from "../Components/Services";
import AboutUs from "../Components/AboutUs";
import Organized from "../Components/Organized";

const Home = () => {
    const loadData = useLoaderData()
    // console.log(loadData);
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
                <Banner></Banner>
                <Services loadData={loadData}></Services>
                <Organized></Organized>
                <AboutUs></AboutUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;