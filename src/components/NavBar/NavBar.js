import React from 'react'
import {Navbar,Form,FormControl,Button,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Brand href="#home">Checkpoint-API</Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink exact to="/" className="app-link" activeClassName="active-link">Home</NavLink>
                                <NavLink to="/users" className="app-link" activeClassName="active-link">Users</NavLink>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}

export default NavBar
