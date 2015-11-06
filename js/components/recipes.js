window.Recipes = React.createClass({
    propTypes: {
        search: React.PropTypes.object,
        data: React.PropTypes.array.isRequired
    },
    getDefaultProps: function () { 
        return  {
            search: {
                ingredients: '',
                query: ''
            }
        }
    },
    parseSearchString: function () {
        var searchString = 'Search results',
            search = this.props.search,
            out = '';

        if (search.ingredients || search.query) {
            if (search.query) {
                searchString += ' for ' + search.query;
            }
            if (search.ingredients) {
                searchString += ' in category ' + search.ingredients;
            }
            out = <h3>{searchString}</h3>
        }

        return out;
    },
    render: function () {
        var search = this.props.search,
            data = this.props.data,
            rows = <h3>No recipes found</h3>;

            if (data.length) {
                rows = data.map(function (item) {
                    return <Row recipe={item} category={search.ingredients} key={item.href}/>;
                })
            }

        return <div className="scrollable">
                    <div className="container">
                        {this.parseSearchString()}
                        {rows}
                    </div>
                </div>;
    }
});