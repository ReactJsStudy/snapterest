const   React = require('react');

const   Tweet = require('./tweet'),
        listStyle = {
            padding: 0
        },
        listItemStyle = {
            display: 'inline-block',
            listStyle: 'none'
        };

module.exports = React.createClass({
    getListOfTweetIds(){ return Object.keys(this.props.tweets); },
    getTweetElement(tweetId){
        const [
            tweet,
            handleRemoveTweetFromCollection,
        ] = [
            this.props.tweets[tweetId],
            this.props.onRemoveTweetFromCollection
        ];
        let tweetElement;
        if(handleRemoveTweetFromCollection) {
            tweetElement = (
                <Tweet
                    tweet={tweet}
                    onImageClick={handleRemoveTweetFromCollection}
                />
            );
        } else {
            tweetElement = (
               <Tweet tweet={tweet} />
           );
        }
        return (
            <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>
        );
    },
    render(){
        const tweetElements = this.getListOfTweetIds().map(this.getTweetElement);
        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        );
    }
});
