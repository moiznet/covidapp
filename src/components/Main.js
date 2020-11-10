import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Paises from '../views/Paises'
import noticia from '../views/pais'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/paises' component={Paises}/>
      <Route path='/noticia' component={noticia}/>
 		
    </Switch>
  </main>

)


export default Main
