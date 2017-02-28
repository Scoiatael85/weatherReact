var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({ 
	onSearch: function (e) {
		e.preventDefault();

		var locationRef = this.refs.search;
		var location = locationRef.value;

		var encodedLocation = encodeURIComponent(location);

		if (location.length > 0) {
			locationRef.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
	render: function () {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Weather App - React</li>
						<li>
						  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>						
						</li>
						<li>
						  <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>			
						</li>
						<li>
						  <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>	
						</li>
					</ul>
				</div>
				
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
					    <ul className="menu">
      						<li><input type="search" placeholder="select a city" ref="search"/></li>
      						<li><input type="submit" className="button" value="Get Weather"/></li>
    					</ul>
					</form>
				</div>

			</div>
		);
	}
});

module.exports = Nav;