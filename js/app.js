var App = React.createClass({
	getInitialState: function () {
		return {
			results: [],
			categories: [],
			search: {
				ingredients: '',
				query: ''
			}
		}
	},
	setCategory: function (cat) {
		var that = this;
		this.setState({
			search: {
				query: that.state.search.query,
				ingredients: cat,
			}
		})
	},
	setSearch: function (query) {
		var that = this;
		this.setState({
			search: {
				query: query,
				ingredients: that.state.search.ingredients
			}
		})
	},
	resetSearch: function () {
		this.setState({
			search: {
				query: '',
				ingredients: ''
			}
		})
	},
	componentWillMount: function () {
		var that = this;
    	$.getJSON('data/data.json').then(function (data) {
			that.setState(data);
		});
	},
    render: function () {
        return <div>
				<Search categories={this.state.categories} search={this.state.search} 
						setSearch={this.setSearch} setCategory={this.setCategory}
						resetSearch={this.resetSearch}/>
				<Recipes data={this.state.results} search={this.state.search}/>
			    <Appfooter/>
		    </div>
    }
});


ReactDOM.render(
	<App/>, 
	document.getElementById('recipe-search-holder')
);