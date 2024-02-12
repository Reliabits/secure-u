import React from 'react'
import '../header/header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    return (
        <>
            <div className='row'>
                <div className='col-sm-12'>
                    <Navbar fixed="top" expand="lg" className="nav-background pt-4 bg_color">
                        <Container className='padding_nav'>
                            <Navbar.Brand href="#home" className='secure-logo'>Secure-U</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <span className='item-nav px-4 mx-2'>  <Nav.Link href="#link" className='link-color'>Why Us</Nav.Link></span>
                                    <span className='item-nav px-4 mx-2'>  <Nav.Link href="#link" className='link-color'>Feature</Nav.Link></span>
                                    <span className='item-nav px-4 mx-2'>  <Nav.Link href="#link" className='link-color'>contact us</Nav.Link></span>
                                    <span className='item-nav pt-2 px-4 mx-2 '  onClick={() => navigate("/Login")} >  <span className='link-color'>login</span></span>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Header