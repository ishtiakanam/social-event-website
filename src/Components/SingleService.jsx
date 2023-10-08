/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SingleService = ({ service }) => {
    const { id, image, category, price, description } = service || {};
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title text-purple-600 font-bold">{category}</h2>
                    <p className="text-gray-600">{description}</p>
                    <p>${price}</p>
                    <Link to={`/service/${id}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;