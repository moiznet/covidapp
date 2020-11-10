import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';




class Paises extends React.Component  {

 constructor(props) {
    super(props);
    this.state = { article: [], "new": {}};


 }

 componentDidMount() {
    axios.get(`https://api.covid19api.com/countries`)
      .then(res => {

      	console.log(res.data);
        const article = res.data;
        this.setState({ article });
         this.setState({ "new": this.state.article });
         console.log("hola");
       console.log(this.state.article.length);
       
        

      })
  }



    render() {
 

      return (


	<div class="paises-lista">
	    <h1>Paises</h1>


	<div clas="pais-lista">
	<ul>
  	{this.state.article.map((pais, index) => (

  		<li class="paislist" id={ pais.Country } >  <Link to={{ pathname: '/noticia', search: '?sort='+pais.Country }} >  <h2>{pais.Country}</h2></Link> </li>

    ))}
    </ul>
    </div>


	    
	    
	 
	    
	  </div>

      	// <ul>
      	// <h1> Noticia   </h1>
      	// 	<li>Id : {this.state.new.id}</li>
      	// 	<li> About  : {this.state.new.about} </li>
      	// 	<li> Title : {this.state.new.title}</li>
      	// 	<li> Sumary : {this.state.new.summary}</li>
      	// </ul>
       




   
      )
    }
  }
 
  export default Paises;







