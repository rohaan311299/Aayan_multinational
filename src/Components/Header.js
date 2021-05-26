import React from 'react';
import {Navbar, Nav, Container, Image} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
                <Container>
                    <Link to="/">
                    <Image src="/images/logo.png" style={{width:"50px", height:"50px"}} />
                    </Link>
                    <LinkContainer to="/">
                        <Navbar.Brand>Aayan Multinational</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ml-auto'>
                            {/* <LinkContainer to="/about">
                                <Nav.Link><i className="fas fa-info"></i> About</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to="/products">
                                <Nav.Link><i className="fas fa-shopping-cart"></i> Our Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contactus">
                                <Nav.Link><i className="fas fa-phone-alt"></i> Contact Us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
