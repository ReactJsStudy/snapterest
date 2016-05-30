const   React = require('react');

const   buttonStyle = {
            margin: '10px 10px 10px 0'
        };

module.exports = React.createClass({
    render(){
        return (
            <button
                className="btn btn-default"
                style={buttonStyle}
                onClick={this.props.handleClick}
            >{this.props.label}</button>
        );
    }
});