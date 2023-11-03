/* eslint-disable react/no-unescaped-entities */
import image1 from '../../public/images/family.jpeg'
import image2 from '../../public/images/mehedi2.jpeg'
import image3 from '../../public/images/biya.jpeg'
const Organized = () => {
    return (
        <div className='py-10 max-w-6xl mx-auto'>
            <h1 className="text-4xl font-bold text-center py-10 text-purple-600">Some organized Events of Ours</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* 1 */}
                <div className="relative flex py-10  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
                    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img className='w-full' src={image1} alt="img-blur-shadow" />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased text-purple-600">
                            Family function
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            This is the photo of our Family function project.It was a great experience for us.We have arraged this huge programme within 4 days.We have to do hard word for this project.This was held on the previous year at December.</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="relative flex py-10  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img className='w-full' src={image2} alt="img-blur-shadow" />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased text-purple-600">
                            Mehedi function
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            This is the photo of our Mehedi function project.It was a great experience for us.We have arraged this huge programme within 4 days.We have to do hard word for this project.This was held on the previous year at July at 2023.</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="relative flex py-10  h-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img className='w-full' src={image3} alt="img-blur-shadow" />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased text-purple-600">
                            Weeding function
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            This is the photo of our Weeding function project.It was a great experience for us.We have arraged this huge programme within 4 days.We have to do hard word for this project.This was held on the this year at January on 2024.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organized;