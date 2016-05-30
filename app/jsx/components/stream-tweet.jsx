const   React = require('react'),
        ReactDOM = require('react-dom');

const   Header = require('./header'),
        Tweet = require('./tweet');

module.exports = React.createClass({
    getInitialState(){
        console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    },
    componentWillMount(){
        console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        });
        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },
    componentDidMount(){
        console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');
        const componentDOMRepresentation = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },
    componentWillReceiveProps(nextProps){
        console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');
        const
            currentTweetLength = this.props.tweet.text.length,
            nextTweetLength = nextProps.tweet.text.length,
            isNumberOfCharactersIncreasing = nextTweetLength > currentTweetLength;
        let headerText;
        if(isNumberOfCharactersIncreasing) headerText = 'Number of characters is increasing';
        else headerText = 'Latest public photo from Twitter';
        window.snapterest.numberOfReceivedTweets++;
        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing,
            headerText: headerText
        });
    },
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');
        return (nextProps.tweet.text.length > 1);
    },
    componentWillUpdate(nextProps, nextState){
        console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
    },
    componentDidUpdate(nextProps, nextState){
        console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
        window.snapterest.numberOfDisplayTweets++;
    },

    componentWillUnmount(){
        console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');
        delete window.snapterest;
    },
    render(){
        console.log('[Snapterest] StreamTweet: Running render()');
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}
                />
            </section>
        );
    }
});
