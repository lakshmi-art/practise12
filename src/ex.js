import React,{useEffect,useState} from 'react';
import axios from  'axios'

const Ex = () => {

const [data,setdata] =useState([])
 useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
       /*  response => console.log(response.data) */
       response => setdata(response.data)
    )
 },[])
  return (
    <div>
     {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  );
}

export default Ex;
