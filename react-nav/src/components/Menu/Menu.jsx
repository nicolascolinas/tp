import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';



function Menu({param1}) {
    // const {param1} = props
    // console.log(props)
    return (
        <>    
        <Navbar className="navBg" variant="dark" expand="lg" bg="dark">
         <Container>
             <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
                 <Nav.Link as={Link} to="/" >Pc</Nav.Link>
                 <Nav.Link as={Link} to="/pc">XBOX</Nav.Link>
                 <Nav.Link as={Link} to="/xbox">Ps5</Nav.Link>   
                              
             </Nav>
             </Navbar.Collapse>
              <Link to='/cart'>
                        <button className='btn btn-outline-primary'>
                            Cart
                        </button>
                    </Link>
         </Container>
         </Navbar>  
           <Outlet> </Outlet>
         <section>
         </section> 
        </> 
     )
 }

export default Menu