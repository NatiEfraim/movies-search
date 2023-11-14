import React from 'react'
import VodItem from './vodItem'

function VodList(props) {
  // console.log(props.arr_vod);
  let arr_movie=props.arr_vod;
    console.log(arr_movie);

  return (
    <div className='container-fluid py-4'>
      <div className='container'>
        <h3>List of movies</h3>
        <div className='row'>
          {
            arr_movie.map(item=>{
              return(
                <VodItem key={item.imdbID} item={item}></VodItem>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default VodList