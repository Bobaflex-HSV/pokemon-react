import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router'

export default() =>{
  let {id, info} = useParams();
  console.log(useParams());
  return(
    <div>
      <h2>Details</h2>
     <p>{id}</p>
     <p>{info}</p>
    </div>
  )
}