import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Movie from './movie'

class Movielist extends Component{
    static propTypes = {
        movies:PropTypes.array
    }
    render(){
        const {movies} = this.props
    return movies.map(( movie, index) => {
        return (
             <Movie key={movie.imdbID} 
             title={movie.Title} 
             year={movie.Year}
             poster={movie.Poster}
             index={index}
             id={movie.imdbID}
            />
            )
        })
    }
}

export default Movielist