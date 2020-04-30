import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router'

export default function Pokemon() {
  let { id} = useParams();
  return(
  <div> 
    <h2> Pokemon ID: {id}</h2>
  </div>
  )
};  