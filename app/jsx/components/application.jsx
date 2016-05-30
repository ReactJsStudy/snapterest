const   React = require('react');

const   Stream = require('./stream'),
        Collection = require('./collection');

module.exports = React.createClass({
    getInitialState(){ return { collectionTweets: {} }; },
    addTweetToCollection(tweet){
        const collectionTweets = this.state.collectionTweets;
        collectionTweets[tweet.id] = tweet;
        this.setState({ collectionTweets });
    },
    removeTweetFromCollection(tweet){
        const collectionTweets = this.state.collectionTweets;
        delete collectionTweets[tweet.id];
        this.setState({ collectionTweets });
    },
    removeAllTweetsFromCollection(){
        this.setState({ collectionTweets : {} });
    },
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Stream onAddTweetToCollection={this.addTweetToCollection} />
                    </div>
                    <div className="col-md-8">
                        <Collection
                            tweets={this.state.collectionTweets}
                            onRemoveTweetFromCollection={this.removeTweetFromCollection}
                            onRemoveAllTweetsFromCOllection={this.removeAllTweetsFromCollection}
                        />
                    </div>
                </div>
            </div>
        );
    }
});