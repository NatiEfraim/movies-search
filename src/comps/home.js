import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import VodStrip from './vodStrip'
import VodList from './vodList'
import "./home.css"



function Home() {
  // fiffine vare to collect the query in the url
  // domien/?s=query
  const [query]=useSearchParams();
  const [arr_movies,setAr]=useState([]);
  useEffect(()=>{
    let searchMovie=query.get("s") || "blue";
    doApi(searchMovie);
  },[query])///each change of query
  const doApi=async(_searchMovie)=>{
    let url=`https://www.omdbapi.com/?s=${_searchMovie}&apikey=988e734d`
    let resp=await fetch(url);
    let data =await resp.json();
    // console.log(data.Search);
    setAr(data.Search);
    // console.log(arr_movies)
  }
  return (
    <React.Fragment>
      <VodStrip/>
      <VodList arr_vod={arr_movies}/>
    </React.Fragment>
  )
}

export default Home