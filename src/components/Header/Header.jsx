import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink,useNavigate} from 'react-router-dom'

const Header =() =>{
  const navigate = useNavigate();
  const handleLogin =()=> {
    navigate('/login');
  }
  const handleSignup =()=> {
    navigate('/signup');
  }
  return (
    <Navbar bg='light' expand="lg">
      <Container>
       
        <NavLink to='/' className='navbar-brand'>Home</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav>
            <button className='btn-login' onClick={handleLogin}>login</button>
            <button className='btn-signup' onClick={handleSignup}>sign up</button>
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;