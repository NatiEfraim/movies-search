import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom'
function VodInput() {
  const inputRef=useRef();
  const nav=useNavigate();
  const onSerchKeyBoard=(e)=>{
    if (e.key=="Enter") {
      // do search
      onSearchClick();
    }
  }
  const onSearchClick=()=>{
    // window.alert(inputRef.current.value);
    nav(`/?s=${inputRef.current.value}`);
    inputRef.current.value="";//refersh
  }
  return (
    <header className='container-fluid bg-dark p-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo col-auto'>
          <h3 className='text-white'>My VOD</h3>
          </div>
          <nav className='d-flex col-md-6'>
            <input onKeyDown={onSerchKeyBoard} ref={inputRef} placeholder='search movie' type='search' className='form-control'></input>
            <button onClick={onSearchClick} className='btn btn-warning'>search</button>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default VodInput