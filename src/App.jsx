import React from 'react'
import {useState, useEffect} from "react"
import HomePage from './pages/HomePage/HomePage.jsx';
import SinglePage from './pages/SinglePage/SinglePage.jsx';
import './app.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([])
  const [selectedRecipeId, setSelectedRecipeId] = useState("")
  const [isModalOpen, setModalOpen] = useState(false)
  const [shouldUpdate, setUpdate] = useState(false)

  useEffect(()=>{
    fetch('https://6245a34a2cfed1881724841e.mockapi.io/recipes')
    .then((res)=>res.json())
    .then((response)=> setData(response))
  },[shouldUpdate])

  const setSelectedRecipe=(xxx)=>{
    setSelectedRecipeId(xxx)
  }

  const setModal = (modalState) => {
    setModalOpen(modalState)
  }

  const setShouldUpdate = () => {
    setUpdate(!shouldUpdate)
  }
  
  return ( 
        <div>
          {isModalOpen && <Modal setModal={setModal} setShouldUpdate={setShouldUpdate}/>}
          <Header setModalToOpen={setModal}></Header>
          <Switch>
            <Route exact path="/">
              <HomePage recipes={data} setSelectedRecipe={setSelectedRecipe} setShouldUpdate={setShouldUpdate}/>
            </Route>
            <Route path="/:id">
              <SinglePage setSelectedRecipe={setSelectedRecipe} recipe={data.find(e=>e.id===selectedRecipeId)}/>
            </Route>
          </Switch>
          <Footer/>
        </div>
     );
  }

export default App;