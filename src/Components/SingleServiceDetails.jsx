import Swal from "sweetalert2";
import Navbar from "./Navbar";

/* eslint-disable react/prop-types */
const SingleServiceDetails = ({ card }) => {
    const { image, category, price, description } = card || {};
    const handleSuccess = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully added card',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card w-[40%] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-600 font-bold">{category}</h2>
                    <p>{description}</p>
                    <p>${price}</p>
                    {/* <Link to={`/service/${id}`}> */}
                    <div className="card-actions">
                        <button onClick={handleSuccess} className="btn btn-primary">Add to cart</button>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;