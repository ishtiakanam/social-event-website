import bannerBackGround from '../../public/images/banner3.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerBackGround})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center  text-gray">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Hey Welcome to our website.</h1>
                    <p className="mb-5">Here you may purches many types of parties.Here are different type of parties name showes in the services section..</p>
                    <button className="btn text-purple-600 font-bold">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;