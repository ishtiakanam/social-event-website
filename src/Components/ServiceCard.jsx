import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleServiceDetails from './SingleServiceDetails';
const ServiceCard = () => {
    const loadData = useLoaderData()
    const [card, setCard] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const card = loadData?.find((card) => card.id === id)
        setCard(card)
    }, [id, loadData])
    return (
        <div>
            <SingleServiceDetails card={card}></SingleServiceDetails>
        </div>
    );
};

export default ServiceCard;