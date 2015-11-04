var App = React.createClass({
    render: function () {
    	debugger;
        return <div>
				<Search/>
				<div className="container">
			        <h3>{'Search results for Salmon in category Fish'}</h3>
			        <Row/>
			    </div>
			    <Appfooter/>
		    </div>
    }
});

ReactDOM.render(
	<App/>
, document.getElementById('recipe-search-holder'));