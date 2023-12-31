import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function VanDetail(props) {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        // Fetch van data from the MirageJS server
        fetch(`/api/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans));
    }, [id]);

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price">
                        <span>${van.price}</span>/day
                    </p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default VanDetail;
