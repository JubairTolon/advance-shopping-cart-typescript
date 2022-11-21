import { Container, Nav, Navbar as NavbarBs, NavLink } from "react-bootstrap";

export const Navbar = () => {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                    <Nav.Link to='/contact' as={NavLink}>Contact</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}