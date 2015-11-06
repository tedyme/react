window.Row = React.createClass({
    propTypes: {
        recipe: React.PropTypes.object.isRequired,
        category: React.PropTypes.string
    },
    getDefaultProps: function () {
        return {
            category: ''
        }
    },
    render: function () {
        var visible = '';
        if (this.props.category === '') {
            visible = 'hidden';
        }
        return <div className="media">
                    <div className="media-left">
                        <a href={this.props.recipe.href}>
                            <img className="media-object" src={this.props.recipe.thumbnail} alt={this.props.recipe.title}/>
                        </a>
                    </div>
                    <div className="media-body">
                        <a href={this.props.recipe.href}>
                            <h4 className="media-heading">{this.props.recipe.title}</h4>
                        </a>
                        <p><b>ingredients</b>: {this.props.recipe.ingredients}</p>
                        <p className={visible}><b>Category</b>: Fish</p>
                    </div>
                </div>;
    }
});