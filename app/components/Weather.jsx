var React = require('react');
var WeatherMessage = require('WeatherMessage');
var MessageHandler = require('MessageHandler');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	// getDefaultProps: function() {
	// 	return {
	// 		//name: 'Student',
	// 		message: "Let's Check the Weather in Attleboro!"
	// 	};
	// },
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({isLoading: true});
		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage) {
			alert(errorMessage);
			that.setState({
				isLoading: false
			});
		})
	},
	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3>Fetching Weather...</h3>
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<MessageHandler onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;