import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


const API_KEY ='915f2331'

export class  Navbarheader extends Component{
    state = { 
        inputMovie:''
    }
    _handleChange =(e) => {
        this.setState({inputMovie:e.target.value})
    }
    _handleSubmit =(e) =>{
        e.preventDefault()
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            const {Search = [],totalResult} = results
            // const searchResult = Search || []
            console.log({Search,totalResult});
            
            this.props.onResult(Search)
        })
    }
    render(){
        return (
         
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav  className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form onSubmit={this._handleSubmit} inline>
              <FormControl onChange={this._handleChange} type="text" placeholder="Buscar pelicula" className="mr-sm-2" />
              <Button type="submit" variant="outline-info">Burscar</Button>
            </Form>
          </Navbar>
            
        )
    }

}

