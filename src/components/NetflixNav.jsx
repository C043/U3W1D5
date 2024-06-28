import { Container, Nav, Navbar } from "react-bootstrap";

const NetflixNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./assets/img/netflix_logo.png" alt="netflix logo" style={{ width: "150px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tv Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNav;
