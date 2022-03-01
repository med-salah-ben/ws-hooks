import React from 'react'
import YouTube from 'react-youtube';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Trailer = ({movies}) => {
    const navigate = useNavigate();
    console.log("Trailerr ",movies)
    const params = useParams();
    const movie = movies.find((el)=>el.id===+params.id)
    console.log("movieTrail",movie)
    console.log("IDTRAi",movie.trailer)
    console.log(params)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
    const onReady = (event)=> {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  return (
    <div>
        <YouTube videoId={movie.trailerId} opts={opts} onReady={onReady} />
        <p> {movie.descreption} </p>
        <Button onClick={()=>navigate(-1)} >go back</Button>
       <Link to="/"><button>Back to home Page</button></Link> 


    </div>
  )
}

export default Trailer