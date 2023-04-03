import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars({ user, setUser }) {
  
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
    <Navbar bg="dark" variant="dark"sticky="top">

          <Container> 
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
             <Nav style={{ color: "White" }}>Welcome {user}!</Nav>
            <Nav className="posts-nav">
              <Nav.Link href="/posts">Posts</Nav.Link>
              <Nav.Link  onClick={logout} href="/login">LogOut</Nav.Link>
          
            </Nav>
          </Container>
        </Navbar>
        :
          <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/posts">Posts</Nav.Link>
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
