var App = React.createClass({
    render: function () {
        return <div>
				<Search/>
				<Recipes/>
			    <Appfooter/>
		    </div>
    }
});

ReactDOM.render(
	<App/>
, document.getElementById('recipe-search-holder'));