import React, { Component } from 'react';
import axios from 'axios';


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
        window.location = '/'; //takes them back to main page
    }

    render(){
        return (

            <div className="Form" style={{padding:"3%"}}>
                
                <div className="Display"  >
                {/* <h1>Recommended Episode</h1> */}
                
                <img src={this.state.imageLink} alt="Spongebob" style={{margin: "0 auto", maxWidth: "20vh"}}></img>

                <p style={{backgroundColor: "blue", borderRadius:"5px", marginTop:"5%"}}> Episode Title: {this.state.episodeName} </p>

                    <p style={{backgroundColor: "blue", borderRadius:"5px"}}> Episode Number: {this.state.episodeNumber} </p>

                    <p style={{backgroundColor: "blue", borderRadius:"5px"}}> Rating: {this.state.rating} </p>

                    <p style={{backgroundColor: "blue", borderRadius:"5px"}}>Plot: {this.state.plot} </p>

                    <button onClick ={this.clickMe} className = "Button2">
                        New Episode
                    </button>
                </div>

                

            </div>
            
        )
    }
}