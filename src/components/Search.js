import React from 'react'


export default class Search extends React.Component{
    render(){
        return(
            <div>
            <p>enter the name of anyone in the Star Wars universe</p>
            <input type="text" id ="star-wars-name" placeholder="Luke Skywalker"></input>
            <input type="submit" id="submit-star-wars-name" value="Use The Force"></input>
            </div>
        )

    }
}