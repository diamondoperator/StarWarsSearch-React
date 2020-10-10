
import React from "react";
//import StarWarsFetch from "./StarWarsFetch"
// import {results} from './StarWarsFetch'

export default class DisplayResults extends React.Component {
  render() {
    return (
      <ul>
        {/* {this.props.names.map((result) => (
          <li>{result.name}</li>
        ))} */}
        <li>{this.props.names}</li>
      </ul>
    );
  }
}
