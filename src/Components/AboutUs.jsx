/* eslint-disable react/no-unescaped-entities */
import picture from '../../public/images/couple.jpeg'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
const AboutUs = () => {
    return (
        <div>
            <h2 className='text-4xl text-center py-10 font-bold text-purple-600'>About us</h2>
            <div className="relative  flex items-center w-full h-[50%] flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        Let's know what we done ..
                    </h6>
                    {/* <h4 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased ">
                        About Us
                    </h4> */}
                    <p className="mb-8 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
                        1.We work in many different events like Weeding,Birthday parties,Baby shower etc etc programmes. <br />
                        <br />
                        2.We work for develop our own events. <br /> <br />
                        3.We have also makeup artists and camera man.. <br /> <br />
                        4.We have a combine pacage for every category... <br /> <br />
                        5.We may contact us by facebook,twitter,instagram etc <br /> <br />


                    </p>
                    <div className='flex items-center gap-5'>
                        <a className='flex items-center ' href="">
                            FaceBook<FaFacebook className='ml-3' />
                        </a>
                        <a className='flex items-center ' href="">
                            Twitter<FaTwitter className='ml-3' />
                        </a>
                        <a className='flex items-center ' href="">
                            Instagram<FaInstagramSquare className='ml-3' />
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;