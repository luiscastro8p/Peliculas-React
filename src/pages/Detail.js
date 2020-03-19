import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
const API_KEY ='915f2331' 

export class Detail extends Component{
    static propTypes = {
        match:PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string
        })
    }
    state = {movie:{}}
    _fetchMovie({ id }){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
           this.setState({movie})
            // const searchResult = Search || []
            console.log({movie});
    
        })
    }
    componentDidMount=() =>{
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({id})
    }
    _goBack(){
        window.history.back()
    }
    render(){
        const {Title,Poster,Actors,Metascore,Plot} = this.state.movie
        return (
            <div>
                  <Link to='/'>Regresar</Link>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
            <Card.Title>{Title}</Card.Title>
              <Card.Text>
                {Metascore}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>{Actors}</ListGroup.Item>
             <ListGroup.Item>{Plot}</ListGroup.Item>
            </ListGroup>
          
          
          </Card>
            </div>
        )
    }
}

export default Detail