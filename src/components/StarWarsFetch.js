// import React, {Component} from 'react'
// import Search from './Search'
import React from "react";
import DisplayResults from './DisplayResults'

export default class StarWarsFetch extends React.Component {
  constructor(props) {
    super(props);
    this.getCharacters = this.getCharacters.bind(this);
    this.input = React.createRef();

    this.state = {
      search: [],
    };
  }

  getCharacters = (e) => {
    e.preventDefault();
    console.log("form submitted, name: " + this.input.current.value);

    fetch(
      "https://swapi-thinkful.herokuapp.com/api/people/?search=" +
        this.input.current.value
    )
      .then((response) => response.json())
      .then((results) =>
        this.setState({
          search: results.results,
        })
      );
  };

  render() {
    console.log(this.state.search);
    return (
        <div>
      <form onSubmit={this.getCharacters}>
        <input type="text" ref={this.input}></input>
        <input type="submit" value="submit"></input>
      </form>

      <DisplayResults names={this.state.results}/>
      </div>

      //  <ul>
      //   {this.props.results.map(result =>(<li>{result.attributeher}</li>))}
      //  </ul>
    );
  }
}

// {this.props.results.map(result =>(<li>{result.attributeher}</li>))}
