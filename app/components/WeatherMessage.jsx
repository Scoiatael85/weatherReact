var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<p className="text-center">it's an amazing {temp} in {location}</p>
		</div>
	);
}

module.exports = WeatherMessage;