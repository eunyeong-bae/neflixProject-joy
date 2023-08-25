import React from 'react';
import {Button, Container, Form, Nav, Navbar,Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg='dark' data-bs-theme="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#"><img width={100} src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' /></Navbar.Brand>

        <Nav className="justify-content-start flex-grow-1 pe-3">
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/movies" className='nav-item'>Movies</Link>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-danger">Search</Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Navigation
