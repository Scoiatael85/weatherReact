var React = require('react');

var MessageHandler = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		var locationRef = this.refs.location;
		var location = locationRef.value;

		if (location.length > 0) {
			locationRef.value = '';
			this.props.onSearch(location);
		}
	},
	render : function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="location"/>
					<button>Get Weather</button>
				</form>
			</div>
		);
	}
});

module.exports = MessageHandler;