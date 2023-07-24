import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function VanCard({ imageUrl, name, price, type, id }) {
    return (
        <div className="van-tile">
            <Link to={`/vans/${id}`}>
                <img src={imageUrl} alt={name} />
                <div className="van-info">
                    <h3>{name}</h3>
                    <p>
                        {price}
                        <span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${type} selected`}>{type}</i>
            </Link>
        </div>
    );
}

function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    console.log(typeFilter);
    useEffect(() => {
        // Fetch van data from the MirageJS server
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const displayedVans = typeFilter
        ? vans.filter(
              (van) => van.type.toLowerCase() === typeFilter.toLocaleLowerCase()
          )
        : vans;

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {displayedVans.map((van) => (
                    <VanCard key={van.id} {...van} />
                ))}
            </div>
        </div>
    );
}

export default Vans;
