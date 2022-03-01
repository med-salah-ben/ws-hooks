import React from 'react'
import {Form} from "react-bootstrap";
import Rating from '@mui/material/Rating';

const Search = ({setSearchRating,setSearchTitle}) => {
  return (
      <div style={{display:"flex"}}>
<div style={{width:"1522px",margin:"10px 500px 50px 200px"}}>
  <Form.Control type="text" placeholder='search movies...' onChange={(e)=>setSearchTitle(e.target.value)}  />
</div>
<Rating style={{width:"500px", margin:"10px 50px 50px 0px"}}
  name="simple-controlled"
  
  onChange={(event, newValue) => {
     setSearchRating(newValue)
  }}
/>
</div>
  )
}

export default Search