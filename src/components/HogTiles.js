import React, { useState } from "react";
import HogDetail from "./HogDetails";

function HogTile({hog}) {
    const [hogExtras, setHogExtras] = useState(false);

    function handleToggle() {
        setHogExtras( hogExtras => !hogExtras );
    }

    return (
        <div className="pigTile" onClick={handleToggle}>
            <h3>{hog.name}</h3>
            <img className="tile-img" src={hog.image} alt={hog.name} />
            {hogExtras && (
                <HogDetail
                    greased={hog.greased}
                    weight={hog.weight}
                    specialty={hog.specialty}
                />
            )}
        </div>
    );
}

export default HogTile;