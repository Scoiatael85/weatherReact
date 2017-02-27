var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples Component</h1>
			<p>Here are a few examples:</p>
			<ul>
				<li><Link to='/?location=Attleboro'>First Example</Link></li>
				<li><Link to='/?location=Boston'>2nd Example</Link></li>
				<li><Link to='/?location=Bridgton'>Example C</Link></li>
				<li><Link to='/?location=San Francisco'>Fifth Example</Link></li>
			</ul>
		</div>
	)
}
module.exports = Examples;