import {React} from 'react'
import './header.css'
import { Link } from 'react-router-dom';

const Header = (props) =>{
    return ( 
      <div className="header">
        <div>
          <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leaf_icon_15.svg/1003px-Leaf_icon_15.svg.png" alt="logo" /></Link>
          <span>Be healthy</span>

        </div>
        <button onClick={()=>props.setModalToOpen(true)}>Dodaj novi recept</button>
      </div>
     );
  }

export default Header;