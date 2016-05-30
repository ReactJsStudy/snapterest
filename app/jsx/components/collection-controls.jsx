const   React = require('react');

const   Header = require('./header'),
        Button = require('./button'),
        CollectionRenameForm = require('./collection-rename-form'),
        CollectionExportForm = require('./collection-export-form');

module.exports = React.createClass({
    getInitialState(){
        return {
            name: 'new',
            isEditingName: false
        };
    },
    getHeaderText(){
        const number = this.props.numberOfTweetsInCollection;
        let text;
        if(number === 1) text = number + ' tweet in your';
        else text = number + ' tweets in your';
        return (
            <span>{text} <strong>{this.state.name}</strong> collection</span>
        );
    },
    toggleEditCollectionName(){
        this.setState({ isEditingName: !this.state.isEditingName });
    },
    setCollectionName(name){
        this.setState({
            name,
            isEditingName: false
        });
    },
    render(){
        if(this.state.isEditingName) {
            return (
                <CollectionRenameForm
                    name={this.state.name}
                    onChangeCollectionName={this.setCollectionName}
                    onCancelCollectionNameChange={this.toggleEditCollectionName}
                />
            );
        }
        return (
            <div>
                <Header text={this.getHeaderText()} />
                <Button
                    label="Rename collection"
                    handleClick={this.toggleEditCollectionName}
                />
                <Button
                    label="Empty collection"
                    handleClick={this.props.onRemoveAllTweetsFromCollection}
                />
                <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
            </div>
        );
    }
});