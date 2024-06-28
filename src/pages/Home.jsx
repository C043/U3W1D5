import { Component } from "react";
import NetflixNav from "../components/NetflixNav";
import NetflixFooter from "../components/NetflixFootter";
import { Container } from "react-bootstrap";
import NetflixHeader from "../components/NetflixHeader";
import NetflixGallery from "../components/NetflixGallery";

class Home extends Component {
  render() {
    return (
      <>
        <NetflixNav />
        <Container>
          <NetflixHeader />
          <NetflixGallery search="Harry Potter" />
          <NetflixGallery search="Star Wars" />
          <NetflixGallery search="Dahmer" />
        </Container>
        <NetflixFooter />
      </>
    );
  }
}

export default Home;
