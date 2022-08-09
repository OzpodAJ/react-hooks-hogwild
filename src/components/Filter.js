import React from "react";

function Filter({dropDown, isChecked, handleDropDown, handleCheckBox}) {
    return (
        <form action="">
            <input onClick={handleCheckBox} type="checkbox" checked={isChecked}/>

            <select onChange={handleDropDown} value={dropDown}>
                <option value="All">All</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
        </form>
    );
}

export default Filter;