import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import "./navBar.css"


function NavBar(){
    const expand = 'md'
    return(
    <>
        <Navbar style={{backgroundColor : '#ccc'}} key={expand} expand={expand} className="mb-3 sticky-top">
          <Container>
            <Navbar.Brand className='lalezar fs-4' href="#"> پروگ بلاگ </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to='/' className={'nav-link'}>صفحه اصلی</NavLink>
                  <NavLink to='/add-article' className={'nav-link'}>ساخت مقاله</NavLink>      
                  <NavLink to='/about' className={'nav-link'}>درباره ما </NavLink>         
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
        
    )
}
export default NavBar;