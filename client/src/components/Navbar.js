import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';


function Navbars({ user, setUser, ...props }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (

    // <div>
    //   <ul className="user-auth">
    //     {user ? 
    //       <>
    //         <li style={{ color: "black" }}>Welcome {user}!</li>
    //         <li className="posts-nav">
    //           <Link to="/posts">Posts</Link>
    //         </li>
    //         <li onClick={logout}>
    //           <Link to="/login">Logout</Link>
    //         </li>
    //       </>
    //      : 
    //       <>
    //         <li className="posts-nav">
    //           <Link to="/posts">Posts</Link>
    //         </li>
    //         <li>
    //           <Link to="/login">Login</Link>
    //         </li>
    //         <li>
    //           <Link to="/register">Register</Link>
    //         </li>
    //       </>
    //     }
    //   </ul>
    //   <div>

    <>
      {user ?
        <Navbar className="Navbar" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/posts">NGC</Navbar.Brand>
            <Nav style={{ color: "White" }}>Welcome {user}!</Nav>
            <Nav className="posts-nav">
              <img src = 'https://icon-library.com/images/50-x-50-icon/50-x-50-icon-3.jpg' className="Profile" variant="primary" onClick={handleShow} alt="..."/>
              <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header action="end" closeButton >
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header >
                <Offcanvas.Body>
                  <Nav.Link onClick={logout} href="/login">Logout</Nav.Link>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Container>
        </Navbar>
        :
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/posts">NGC</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      }
    </>

  );
}
export default Navbars;
