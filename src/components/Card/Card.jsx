import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
 
  const deleteRecipe = () => {
    fetch(`https://6245a34a2cfed1881724841e.mockapi.io/recipes/${props.obj.id}`,{
      method: "DELETE",
      headers: {
        "Content-type" : "application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>props.shouldUpdate())
  }

    return ( 
      <div className="card" onClick={()=>props.setSelectedRecipe(props.obj.id)}>
          <img src={props.obj.image} alt="meal"/>
          <Link to={`/${props.obj.id}`}><h3>{props.obj.meal}</h3></Link>
          <button onClick={(event)=>{
            event.stopPropagation()
            deleteRecipe()}}>x</button>
      </div>
    );
  }

export default Card;