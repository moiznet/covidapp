
import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
  class pais extends React.Component  {

 constructor(props) {
    super(props);
    this.state = { article: [], "new": {}, "contry" : {}};
    let url = this.props.location.search;
    let params = queryString.parse(url);
    this.pais = params.sort;
    console.log(params.sort);


 }

 componentDidMount() {

   


     axios.get(`https://api.covid19api.com/live/country/`+this.pais+`/status/confirmed`)
      .then(res => {

      	console.log(res.data[res.data.length - 1]);
        const pais = res.data[res.data.length - 1];
        this.setState({ pais });
        this.setState({ "contry": this.state.pais });
       
       
        

      })
  }



    render() {
 
    
      return (

        <div>

        <h1> Pais: {this.state.contry.Country} </h1>
      	<ul>
        
      	<li class="aspect">
        <div class="aspect-title"> Casos Confirmados </div>
        <div class="aspect-value" id="confirmados"> {this.state.contry.Active}</div>
        </li>

        <li class="aspect">
        <div class="aspect-title"> Casos Muertes </div>
        <div class="aspect-value" id="muertes"> {this.state.contry.Deaths}</div>
        </li>

        <li class="aspect">
        <div class="aspect-title"> Casos Recuperados </div>
        <div class="aspect-value" id="recuperado"> {this.state.contry.Recovered}</div>
        </li>


      		
      	</ul>
       

        </div>


   
      )
    }
  }
 
  export default pais;