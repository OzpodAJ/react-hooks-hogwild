import React, { useState } from "react";
import hogs from "../porkers_data";
import HogTile from "./HogTiles"
import Filter from "./Filter";

//Upon Loading, display Tile for each hog containing name and image
//when Hog tile is clicked, display added details of specialty, weight,
//greased, and highest medal achieved

function HogContainer() {
    const [hog, setHog] = useState(hogs)
    const [dropDown, setDropDown] = useState("All")
    const [isChecked, setIsChecked] = useState(false)

    function handleDropDown(e) {
        const term = e.target.value;
        setDropDown(term);
    }

    function handleCheckBox() {
        setIsChecked(isChecked => !isChecked);
    }

    const hogFilter = () => {
        if (isChecked) {
            return hogs.filter((hog) => hog.greased);
        } else {
            return hogs;
        }
    };
    const sortHogs = () => {
        const hogArray = hogFilter();

        if (dropDown === "Weight") {
            return hogArray.sort((a, b) => b.weight - a.weight);
        } else if (dropDown === "Name") {
            return hogArray.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            return hogArray;
        }
    };

    const hogTiles = sortHogs().map((hog) => (
        <HogTile hog={hog} key={hog.name} />
    ));

    return (
        <div>
            <div>
                <Filter
                    dropDown={dropDown}
                    isChecked={isChecked}
                    handleDropDown={handleDropDown}
                    handleCheckBox={handleCheckBox}
                />
            </div>
            <div className="grid">{hogTiles}</div>
        </div>
    );
}

export default HogContainer;