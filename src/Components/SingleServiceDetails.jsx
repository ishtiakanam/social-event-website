import Navbar from "./Navbar";

/* eslint-disable react/prop-types */
const SingleServiceDetails = ({ card }) => {
    const { image, category, price, description } = card || {};
    return (
        <div>
            <Navbar></Navbar>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category}</h2>
                    <p>{description}</p>
                    <p>${price}</p>
                    {/* <Link to={`/service/${id}`}> */}
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;