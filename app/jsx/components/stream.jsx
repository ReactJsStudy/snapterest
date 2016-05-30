const   React = require('react'),
        SnapkiteStreamClient = require('snapkite-stream-client');

const   StreamTweet = require('./stream-tweet'),
        Header = require('./header');

module.exports = React.createClass({
    getInitialState(){
        return { tweet : null };
    },
    componentDidMount(){
        SnapkiteStreamClient.initializeStream(this.handleNewTweet);
    },
    componentWillUnmount(){
        SnapkiteStreamClient.destroyStream();
    },
    handleNewTweet(tweet){
        this.setState({ tweet });
    },
    render(){
        const tweet = this.state.tweet;
        if(tweet){
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection}
                />
            );
        }
        return (
            <Header text="Waiting for public photos from Twitter..." />
        );
    }
});