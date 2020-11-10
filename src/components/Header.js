import React from 'react'
import { Link } from 'react-router-dom'



window.user= ""; 
const Header = () => (


  <header>
    <h1> ESTADISTICAS DE COVID-19 POR PAIS</h1>
    <nav>
      <ul>
        <li><Link to='/'>  Home</Link></li>
        <li><Link to='/Paises'>Paises</Link></li>
        
      </ul>
    </nav> 
    
  </header> 

)

export default Header