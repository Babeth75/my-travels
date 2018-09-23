import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
	<div>
		<h1>{destination} - {country}</h1>
		<img src={photo} alt={destination} />
		<p>Distance : {distance}</p>
	</div>
);

export default Travel;