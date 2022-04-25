import React, { useState } from "react";
import "./modal.css";

const Modal = (props) => {
  const [recipe, setRecipe] = useState({
    meal: "",
    prepTime: 0,
    level: 0,
    image: "",
    ingredients: [],
    countryOfOrigin: "",
    mealType: [],
    isVegan: false
  })

  const submitRecipe = () => {
    fetch("https://6245a34a2cfed1881724841e.mockapi.io/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then((response) => {
        props.setShouldUpdate();
        props.setModal(false);
      })}

    const setIngredients = (recipeValue) => {
      const arr = recipeValue.split(",");
      setRecipe({
        ...recipe,
        ingredients: arr
      });
    }

    const setMealType = (recipeValue) => {
      const arr = recipeValue.split(",");
      setRecipe({
        ...recipe,
        mealType: arr
      });
    }

    return (
      <div className="modal-wrapper">
        <div className="modal-content">
            <button className="close-modal" onClick={()=>props.setModal(false)}>X</button>
            <p>Naziv jela:</p>
            <input type="text" name="meal" id="meal" onChange={(e)=>
            setRecipe({
                    ...recipe,
                    meal: e.target.value
            })}/>
            <p>Vreme pripreme:</p>
            <input type="number" name="prepTime" id="prepTime" onChange={(e)=>
            setRecipe({ 
                    ...recipe,
                    prepTime: e.target.value        
            })}/>
            <p>Zemlja porekla jela:</p>
            <input type="text" name="" id="" onChange={(e)=>setRecipe({
                    ...recipe,
                    countryOfOrigin: e.target.value                  
            })}/>
                    
            <p>Sastojci: (odvojeni zarezom)</p>
            <input type="text" name="" id="" onChange={(e)=>setIngredients(e.target.value)}/>
            <p>Nivo tezine:</p>
            <input type="number" name="level" id="level" onChange={(e)=>
            setRecipe({
                    ...recipe,
                    level: e.target.value
            })}/>
            <p>Slika jela: (absolutna putanja sa weba)</p>
            <input type="text" name="image" id="image" onChange={(e)=>
            setRecipe({
                    ...recipe,
                    image: e.target.value
            })}/>
            <p>Vrsta jela: (odvojeni zarezom)</p>
            <input type="text" name="" id="" onChange={(e)=>setMealType(e.target.value)}/>
            <p>Da li je jelo vegansko: </p>
            <input type="radio" name="isVegan" id="isVegan"/> Da
            <input type="radio" name="isVegan" id="isVegan"/> Ne
            <br/>
            <button onClick={submitRecipe}>Dodaj recept</button>
         </div>
      </div>
    )
}

export default Modal;