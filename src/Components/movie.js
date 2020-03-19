import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

export class Movie extends Component{
    static propTypes = {
        id:PropTypes.string,
        title:PropTypes.string,
        year:PropTypes.string,
        poster:PropTypes.string,
        index:PropTypes.number
    }
    render(){
        const {poster,title,year,id,index} = this.props
        return (
            <div className="col-12 col-sm-12 col-md-5  col-lg-4 col-xl-3  mt-4 d-flex justify-content-center">
            <Link to={`/detail/${id}`} style={{width: "350px"}}>
              <Card.Img variant="top" src={poster} />
              <Card.Body>
              <Card.Title >{title}</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            <Card.Footer>
      <small className="text-muted">En el año {year}</small>
      <p>{index}</p>
            </Card.Footer>
      </Link >
            </div>
          
        
          )
    }
}
export default Movie