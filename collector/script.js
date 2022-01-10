import fetch from "node-fetch";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const API = process.env.API;
const Backend = process.env.BACKEND;
for(let i = 1; i <= 13; i++){
    let URL = API + i; 
    // console.log(URL);
    getEpisode(URL)
}

function getEpisode(API_URL) {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        var episodes = data.episodes
        for(let i = 0; i < episodes.length; i++){
            const episode = episodes[i];
            const episodeInfo = {
                episodeName: episode.title,
                episodeNumber: "Season " + episode.seasonNumber + " Epsiode " + episode.episodeNumber,
                rating: episode.imDbRating,
                plot: episode.plot,
                imageLink: episode.image ,
            }
    
            // console.log(episodeInfo);
            axios.post(Backend, episodeInfo)
            .then(res => console.log(res.data))

        }
        
        // console.log(data);
    })
    .catch(error => console.log('ERROR'))
}

