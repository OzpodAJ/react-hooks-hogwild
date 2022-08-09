import React from "react";

function HogDetail({specialty, weight, greased}) {
    return (
        <div>
            <p className="subtleText">Specialty: {specialty}</p>
            <p className="subtleText">Weight: {weight}</p>
            <p className="subtleText">Greased: {greased ? "Yes" : "No"}</p>
        </div>
    )
}

export default HogDetail;