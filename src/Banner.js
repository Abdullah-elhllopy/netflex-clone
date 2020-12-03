import React, { useEffect, useState } from 'react';
import axios from './axios'
import requests from './requests'
import './Banner.css'
function Banner(){
   const[movie, setMovies]= useState([]);
   // useState in react hook used to add state to component 
   // useEffect it use if data change and ubdate more so we but the data wich will change in array last of useEffect
   useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1 )
            ])
            return request 
        }
        fetchData() 
   },[])   
   console.log(movie) 
   function truncate(str,n){
       return str?.length > n ?str.substr(0 , n - 1) + "..." :str;
   }
   return(
      
      <header className = "banner"
         style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
                )`,
                backgroundPosition: "center"
            }}>
        <div className = "banner__contents">
         {/* title*/}
          
           <h1 className = "banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
         
           {/* tow buttons*/}
          
           <div className = "banner__buttons">
          
           <button className = "banner__button">Play</button>    
           <button className = "banner__button">My List</button>    
          
           </div>
          
            {/* descreption*/}
          
           <h1 className = " banner__description">
                {truncate( movie?.overview ,150)}  
            </h1> 
            <div className="banner__fade-bottom" />
        </div>
      </header>


    )


}
export default Banner;



