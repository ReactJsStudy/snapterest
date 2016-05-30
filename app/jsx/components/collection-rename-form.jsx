const   React = require('react'),
        ReactDOM = require('react-dom');

const   Header = require('./header'),
        Button = require('./button'),
        inputStyle = {
            marginRight: '15px'
        };

module.exports = React.createClass({
    getInitialState(){
        return {
            inputValue: this.props.name
        };
    },
    setInputValue(inputValue){
        this.setState({ inputValue });
    },
    handleInputValueChange(e){
        this.setInputValue(e.target.value);
    },
    handleFormSubmit(e){
        e.preventDefault();
        this.props.onChangeCollectionName(this.state.inputValue);
    },
    handleFormCancel(e){
        e.preventDefault();
        this.setInputName(this.props.name);
        this.props.onCancelCollectionNameChange();
    },
    componentDidMount(){
        this.refs.collectionName.focus();
    },
    render(){
        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit}>
                <Header text="Collection name:" />
                <div className="form-control">
                    <input
                        className="form-control"
                        style={inputStyle}
                        onChange={this.handleInputValueChange}
                        value={this.state.inputValue}
                        ref="collectionName"
                    />
                </div>
                <Button label="Change" handleClick={this.handleFormSubmit} />
                <Button label="Cancel" handleClick={this.handleFormCancel} />
            </form>
        );
    }
});