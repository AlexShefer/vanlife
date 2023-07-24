import { useState, useEffect } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

function HostVanDetail() {
    const [currentVan, setCurrentVan] = useState(null);
    const { id } = useParams();
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    useEffect(() => {
        // Fetch van data from the MirageJS server
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setCurrentVan(data.vans));
    }, [id]);
    return currentVan ? (
        <section>
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} alt={currentVan.name} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${currentVan.type}`}>
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        end
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                        to="."
                    >
                        Details
                    </NavLink>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                        to="pricing"
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                        to="photos"
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    ) : (
        <h1>Loading...</h1>
    );
}

export default HostVanDetail;
