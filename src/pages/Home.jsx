import { Component } from "react";
import NetflixNav from "../components/NetflixNav";
import NetflixFooter from "../components/NetflixFooter";
import { Container } from "react-bootstrap";
import NetflixHeader from "../components/NetflixHeader";
import NetflixGallery from "../components/NetflixGallery";
import Profile from "../components/Profile";

class Home extends Component {
  state = {
    home: false,
    profile: true,
    settings: false,
  };
  render() {
    return (
      <>
        <NetflixNav />
        {this.state.home && (
          <Container>
            <NetflixHeader />
            <NetflixGallery search="Harry Potter" />
            <NetflixGallery search="Star Wars" />
            <NetflixGallery search="Dahmer" />
          </Container>
        )}
        {this.state.profile && (
          <Container>
            <Profile />
          </Container>
        )}
        <NetflixFooter />
      </>
    );
  }
}

export default Home;
