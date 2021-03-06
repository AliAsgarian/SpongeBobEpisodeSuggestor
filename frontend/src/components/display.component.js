import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export default class Display extends Component {
    constructor(props){
        super(props);
        this.clickMe = this.clickMe.bind(this);

        this.state = {
            episodeName:'',
            episodeNumber: '',
            rating: 0,
            plot: '',
            imageLink: '',
        }
    }

    componentDidMount() {
        axios.get("https://spongebob-random.herokuapp.com/episode/")
        .then(response => {
            this.setState({
                episodeName: response.data[0].episodeName,
                episodeNumber: response.data[0].episodeNumber,
                rating: response.data[0].rating,
                plot: response.data[0].plot,
                imageLink: response.data[0].imageLink,
            })   
        })
        .catch(function (error) {
            console.log(error);
        })

    }


    clickMe(){
        window.location = '/'; 
    }

    render(){
        return (

            <div className="Background">
                
                <div className="Display">
                    <h1>Random SpongeBob Episode</h1>
                
                    <img src={this.state.imageLink} alt="Spongebob" className="image"></img>
                    <div className="TextBox">
                        <p> Episode Title: {this.state.episodeName} </p>      

                        <p> Episode Number: {this.state.episodeNumber} </p>

                        <p> Rating: {this.state.rating} </p>

                        <p>Plot: {this.state.plot} </p>
                    </div>
                   

                    <button onClick ={this.clickMe} className = "Button">
                        New Episode
                    </button>
                </div>
            </div>
            
        )
    }
}