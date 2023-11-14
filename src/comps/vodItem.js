import React from 'react'
import { useNavigate } from 'react-router-dom';
function VodItem(props) {
    let item=props.item;
    const nav=useNavigate();
  const onInfoClick=()=>{
    nav(`/info/${item.imdbID}`)
  }
  return (
    <div className='col-md-4 p-2'>
        <div className='border p-2 h-100 shadow overflow-hidden'>
            <img src={item.Poster} className='float-start me-3 w-50'></img>
            <h3>{item.Title}</h3>
            <div>Year: {item.Year}</div>
            <button onClick={onInfoClick} className='btn btn-secondary my-3'>More info</button>
        </div>
    </div>
  )
}

export default VodItem