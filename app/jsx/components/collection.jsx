const   React = require('react'),
        ReactDOMServer = require('react-dom/server');

const   CollectionControls = require('./collection-controls'),
        TweetList = require('./tweet-list'),
        Header = require('./header');

module.exports = React.createClass({
    createHtmlMarkupStringOfTweetList(){
        return JSON.stringify({
            html: ReactDOMServer.renderToStaticMarkup(
                <TweetList tweets={this.props.tweets} />
            )
        });
    },
    getListOfTweetIds(){ return Object.keys(this.props.tweets); },
    getNumberOfTweetsInCollection(){ return this.getListOfTweetIds().length; },
    render(){
        const   numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
        if(numberOfTweetsInCollection > 0){
            const [
                tweets,
                htmlMarkup,
                removeAllTweetsFromCollection,
                handleRemoveTweetFromCollection
            ] = [
                this.props.tweets,
                this.createHtmlMarkupStringOfTweetList(),
                this.props.onRemoveAllTweetsFromCollection,
                this.props.onRemoveTweetFromCollection
            ];
            return (
                <div>
                    <CollectionControls
                        numberOfTweetsInCollection={numberOfTweetsInCollection}
                        htmlMarkup={htmlMarkup}
                        onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
                    />
                    <TweetList
                        tweets={tweets}
                        onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
                    />
                </div>
            );
        }
        return (<Header text="Your collection is empty" />);
    }
});