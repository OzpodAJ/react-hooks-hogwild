import React from "react";
import Nav from "./Nav";
import HogTiles from "./HogContainer";

//TESTS
//Follow React Best Practices
//Pass props from parents to children
//Use IDF and Callback functions to pass data from Children to Parents
//Re-render components using State


//DELIVERABLES (What I want to see)
//Upon Loading, display Tile for each hog containing name and image
//when Hog tile is clicked, display added details of specialty, weight,
//greased, and highest medal achieved
//Ability for user to filter out greased hogs (or all hogs based on parameters)
//BONUS: Hide Hogs
//BONUS: Add new Hogs
//BONUS: Semantic Cards


function App() {
	return (
		<div className="App">
			<Nav />
			<HogTiles />
		</div>
	);
}

export default App;
