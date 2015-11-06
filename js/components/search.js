window.Search = React.createClass({
    propTypes: {
        categories: React.PropTypes.array.isRequired,
        setCategory: React.PropTypes.func.isRequired,
        setSearch: React.PropTypes.func.isRequired,
        resetSearch: React.PropTypes.func.isRequired,
        search: React.PropTypes.object.isRequired
    },
    handleCategoryChosen: function (evt) {
        evt.preventDefault();
        this.props.setCategory(evt.target.getAttribute('href'));
    },
    handleReset: function (evt) {
        evt.preventDefault();
        this.props.resetSearch();
        this.refs.searchValue.value = '';
    },
    handleSearchSubmit: function (evt) {
        evt.preventDefault();
        this.props.setSearch(this.refs.searchValue.value);
    },
    render: function () {
        var that = this,
            deepSearch = function (array, value) {
                return array.filter(function (item) {
                    return item.value === value;
                }).length;
            };
        return  <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <span className="navbar-brand">Filters</span>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {
                                    this.props.categories.map(function(cat) {
                                        var active = deepSearch(cat.subcategories, that.props.search.ingredients);
                                        return <li className={(active) ? 'dropdown active' : 'dropdown'} key={cat.title}>
                                            <a
                                                className="dropdown-toggle" 
                                                data-toggle="dropdown" 
                                                role="button" 
                                                aria-haspopup="true" 
                                                aria-expanded="false"
                                            >
                                                {cat.title} 
                                                <span className="caret"></span>  
                                                {(active) ? <span className="sr-only">(current)</span> : ''}
                                            </a>
                                            <ul className="dropdown-menu">
                                                {
                                                    cat.subcategories.map(function(subcat) {
                                                        return <li  key={subcat.value}
                                                                    className={(subcat.value === that.props.search.ingredients)? 'active' : ''}>
                                                                    <a href={subcat.value} onClick={that.handleCategoryChosen}>{subcat.title}</a>
                                                                </li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    })
                                }
                            </ul>
                            <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSearchSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" ref="searchValue"/>
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.handleReset}>Reset</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>;
        }
});