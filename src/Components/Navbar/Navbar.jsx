import React from 'react'
import styleNav from './Navbar.module.css'
import avatar from '../Images/avatar.png'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function Headers() {


    return (
        <>

            <Navbar className={'' + ' ' + styleNav.navbars} bg="light" expand="lg">
                <Navbar.Brand  > <Link className='ms-5 fw-bolder fs-3  p-2 rad-10' to='/'>Ibrahim Nady</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link>
                            <Link className='me-5' to="/Dashboard">
                                <i className="fa-solid fa-chart-simple fa-fw" />
                                <span className=''>Dashboard</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='me-5' to="/Settings">
                                <i className="fa-solid fa-gear fa-fw" />
                                <span>Settings</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='me-5' to="/Profile">
                                <i className="fa-solid fa-user fa-fw" />
                                <span>Profile</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='me-5' to="/Projects">
                                <i className="fa-solid fa-diagram-project fa-fw" />
                                <span>Projects</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='me-5' to="/Courses">
                                <i className="fa-solid fa-graduation-cap fa-fw" />
                                <span>Courses</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='me-5' to="/Friends">
                                <i className="fa-solid fa-user-group fa-fw" />
                                <span>Friends</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='me-5' to="/Files">
                                <i className="fa-solid fa-file fa-fw" />
                                <span>Files</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='me-5' to="/Plans">
                                <i className="fa-solid fa-layer-group fa-fw" />
                                <span>Plans</span>
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to='/Profile'><img className={styleNav.img_nav} src={avatar} alt="" /> Profile</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <i className="fa-solid fa-circle-dot me-2" />
                                No Notification</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
