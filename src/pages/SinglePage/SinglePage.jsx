import React  from 'react'
import { Link } from 'react-router-dom';
import './single-page.css'

const SinglePage = (props) => {
  
    return ( 
      <>
        <div className="single-page">
          <h3>{props.recipe.meal}</h3>
          <img src={props.recipe.image} alt="meal" />
          <p>Prep time : {props.recipe.prepTime}</p>
          <p>Level : {props.recipe.level}</p>
          <ul>
            Ingredients: 
            {props.recipe.ingredients.map(e => <li>{e}</li>)}
          </ul>
          <p>Country of origin : {props.recipe.countryOfOrigin}</p>
          <Link to="/">
            <button onClick={()=>{props.setSelectedRecipe('')}}>Back to home</button>
          </Link>
        </div>
      </>
     );
  }

export default SinglePage;