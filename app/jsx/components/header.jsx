const   React = require('react');

const   headerStyle = {
            fontSize: '16px',
            fontWeight: '300',
            display: 'inline-block',
            margin: '20px 10px'
        };

module.exports = React.createClass({
    getDefaultProps(){
        return { text: 'Default header' };
    },
    render(){
        return (
            <h2 style={headerStyle}>{this.props.text}</h2>
        );
    }
});