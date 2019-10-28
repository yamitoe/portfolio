import React from 'react';
import Autosuggest from 'react-autosuggest';
import './autocomplete.scss'
import cities from '../json/world-cities.json';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
    {
      name: 'C',
      year: 1972
    },
    {
        name: 'Caa',
        year: 1972
      },
    {
      name: 'Elm',
      year: 2012
    } ];
   
export class AutoComplete extends React.Component{
    state = {
        value:'',
        suggestions: []
    };

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : cities.filter(lang =>
           lang.name.toLowerCase().slice(0, inputLength) === inputValue 
        ).slice(0,4);
    };
       
    getSuggestionValue = suggestion => suggestion.name;
       
    renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
    );
    ///
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };
        

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };
        
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
        
        render() {
        const { value, suggestions } = this.state;
        
        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a City',
            value,
            onChange: this.onChange
        };
        
        // Finally, render it!
        return (
            <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            />
        );
     }
}