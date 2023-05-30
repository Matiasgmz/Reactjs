
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/pathe_logo.png'
import '../style/Banniere.css'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Banniere() {

    return (
        <Navbar className='style-navbar sticky-top background-style'  expand="lg">
            <Container className='style-container'>

                <img className='brand-logo' src={logo} />

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-dark fw-bold">
                        <Link className='ms-2 text-dark text-decoration-none' to="/">Film</Link>
                        <Link className='ms-2 text-dark text-decoration-none' to="/question">Question</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
