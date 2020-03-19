import React, {Component} from 'react'
import { Navbarheader } from '../Components/Title'
import Movielist from '../Components/Movielist'


export class Home extends Component{
    state = { usedSearch:false, results:[] }

    _handleResults =(results) =>{
      this.setState({results,usedSearch:true})
    }
    _renderResults(){
     return this.state.results.length === 0 
        ? <p>Lo sentimos no tenemos peliculas disponibles</p>
        : <Movielist movies={this.state.results}/>
    }
    render(){
        return (
            <div className="text-center" >
            <Navbarheader  onResult={this._handleResults} >Peliculas</Navbarheader>
            <div className="container ">
              <div className="row p-3 ">
                {this.state.usedSearch
                ? this._renderResults()
                :<h3>Usa el formulario para buscar una pelicula</h3>}
              </div>
            </div>
          </div>
        )
    }
}

export default Home