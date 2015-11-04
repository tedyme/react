window.Timer = React.createClass({
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
    componentDidUpdate: function () {
        console.log('updating');
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