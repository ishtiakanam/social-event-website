/* eslint-disable react/no-unescaped-entities */
import image1 from '../../public/images/family.jpeg'
import image2 from '../../public/images/mehedi2.jpeg'
const Organized = () => {
    return (
        <div className='py-10 max-w-6xl mx-auto'>
            <h1 className="text-4xl font-bold text-center py-10">Some organized Events of Ours</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* 1 */}
                <div className="relative flex py-10 w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img className='w-full' src={image1} alt="img-blur-shadow" />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Family function
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to "Naviglio" where you can enjoy the main night life in
                            Barcelona.</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="relative flex py-10 w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img className='w-full' src={image2} alt="img-blur-shadow" />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Mehedi function
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to "Naviglio" where you can enjoy the main night life in
                            Barcelona.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organized;