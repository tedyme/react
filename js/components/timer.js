window.Timer = React.createClass({
    propTypes: {
        categories: React.PropTypes.bool
    },
    getDefaultProps: function () {
        return {
            enabled: true
        }
    },
    getInitialState: function () {
        return {
            tick: moment().format('DD.MM.YYYY HH:mm:ss')
        }
    },
    componentDidMount: function () {
        this.tick()
    },
    render: function () {
        return <span>{this.state.tick} {this.props.enabled}</span>;
    },
    tick: function () {
        var that = this;
        setTimeout(function () {
            that.setState(that.getInitialState());
            if (that.props.enabled) {
                that.tick();
            }
        }, 1000);
    }
});