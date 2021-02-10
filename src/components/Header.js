import React from 'react'
import {
    Button,
    Nav,
    Navbar,
    Container,
    Form,
    FormControl
  } from "react-bootstrap";
const Header = () => {
    return (
        <>
          <Container>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Aserto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Form inline>
            <FormControl type="text" placeholder="Enter a user ID" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          </Nav>
          </Navbar>
          </Container>   
        </>
    )
}

export default Header
