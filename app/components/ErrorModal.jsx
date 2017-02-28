var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps: function () {
		return {
			title: 'Error'
		};
	},
	componentDidMount: function () {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function () {
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>Error Title</h4>
				<p>temp Error Message</p>
				<p>
					<button className="hollow button" data-close="">
						Okay
					</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;