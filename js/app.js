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
		}, that.getAPIData);
	},
	setSearch: function (query) {
		var that = this;
		this.setState({
			search: {
				query: query,
				ingredients: that.state.search.ingredients
			}
		}, that.getAPIData);
	},
	resetSearch: function () {
		this.setState({
			search: {
				query: '',
				ingredients: ''
			}
		}, this.getAPIData);
	},
	componentWillMount: function () {
		var that = this,
			setAPIData = function () {
			};
    	$.getJSON('data/data.json').then(function (data) {
			that.setState(data);
		});
		that.getAPIData();
		
	},
	getAPIData: function () {
		var that = this,
			url = 'http://www.recipepuppy.com/api/?',
			params = [];
		if (that.state.search.ingredients) {
			params.push('i='+that.state.search.ingredients);
		}
		if (that.state.search.query) {
			params.push('q='+that.state.search.query);
		}
		$.ajax({
		    url: url + params.join('&'),
		    dataType: 'jsonp',
		    jsonpCallback: 'setAPIData',
		    method: 'get',
			success: function( data ) {
				that.setState({
					results: data.results
				});
			}
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