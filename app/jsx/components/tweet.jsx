const   React = require('react');

const   tweetStyle = {
            position: 'relative',
            display: 'inline-block',
            width: '300px',
            height: '400px',
            margin: '10px'
        },
        imageStyle = {
            maxHeight: '400px',
            boxShadow: '0 1px 1px 0 #aaa',
            border: '1px solid #fff'
        };

module.exports = React.createClass({
    propTypes: {
        tweet(prop, propName, componentName){
            const tweet = prop[propName];
            if(!tweet) return new Error('Tweet must be set.');
            if(!tweet.media) return new Error('Tweet must have an image.');
        },
        onImageClick: React.PropTypes.func
    },
    handleImageClick(){
        const   tweet = this.props.tweet,
                _click = this.props.onImageClick;
        if(_click) _click(tweet);
    },
    render(){
        const   tweet = this.props.tweet,
                tweetMediaUrl = tweet.media[0].url;
        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} />
            </div>
        );
    }
});