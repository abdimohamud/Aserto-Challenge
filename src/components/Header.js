import React,{useState} from 'react'
import{NavLink} from 'react-router-dom'
import {
    Button,
    Nav,
    Navbar,
    Form,
    FormControl
  } from "react-bootstrap";
const Header = () => {
  const[id, setId] = useState("")
  const handleChange = e=>{
    setId(e.target.value)
  }
    return (
        <>
          <div className="nav-container">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Aserto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/ids">IDs</Nav.Link>
            <Form inline>
            <FormControl type="text" placeholder="Enter a user ID" className="mr-sm-2" onChange={handleChange} />
           <NavLink to={id.length?`/user/${id}`:''}><Button variant="outline-light">Search</Button></NavLink> 
          </Form>
          </Nav>
          </Navbar>
          </div>   
        </>
    )
}

export default Header
