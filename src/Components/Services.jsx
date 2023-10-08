/* eslint-disable react/prop-types */
import SingleService from "./SingleService";

const Services = ({ loadData }) => {
    return (
        <div>
            <h1 className="text-4xl text-center my-10 font-bold text-purple-600">This is out Service list</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    loadData.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;