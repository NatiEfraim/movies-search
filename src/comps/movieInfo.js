import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export default function MovieInfo() {
    const [item_movie,setMovie]=useState({});
    const params=useParams();
    const nav=useNavigate();
    useEffect(()=>{
        doApi();
    },[])
    const doApi= async()=>{
        const url=`https://www.omdbapi.com/?i=${params["id"]}&apikey=988e734d`;
        let resp=await fetch(url);
        let data=await resp.json();
        console.log(data);
        setMovie(data);
    }
  return (
    <div className="container p-4 d-flex my-2 shadow ">
      <div className="float-left p-0 mx-3">
      <img 
          src={item_movie.Poster}
          className="col-md-12 float-left me-2 "
        /> 
      </div>
      <div className="float-left p-4">
        <h1>{item_movie.Title}</h1>
        <h4><strong>runtime:</strong> {item_movie.Runtime}</h4>
        <h4><strong>Dirctor:</strong> {item_movie.Director}</h4>
        <h4><strong>gener:</strong> {item_movie.Genre} </h4>
        <h4><strong>Language:</strong> {item_movie.Language} </h4>
        <div className="my-3 col-md-6 "><strong>plot:</strong> {item_movie.Plot}</div>
        <button onClick={()=>{
            nav(-1)
        }}  className="btn btn-dark mt-4">back to list</button>
      </div>
    </div>
  )
}
