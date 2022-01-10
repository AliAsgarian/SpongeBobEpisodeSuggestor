import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';


export default class Home extends Component{

    constructor(props){
        super(props);

        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(){
        window.location = '/display'; //takes them back to main page
    }

    render(){
        return (
            <div className="Home">
            <h1>Random SpongeBob Episode Recommender</h1>
            {/* <div className="Home2"> */}

            <button onClick ={this.clickMe} className = "Button">
                Click to get a random episode
            </button>


            {/* </div> */}
            </div>
        )
    }
}