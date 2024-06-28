import { Component } from "react";
import NetflixNav from "../components/NetflixNav";
import NetflixFooter from "../components/NetflixFootter";
import { Container } from "react-bootstrap";
import NetflixHeader from "../components/NetflixHeader";

class Home extends Component {
  render() {
    return (
      <>
        <NetflixNav />;
        <Container>
          <NetflixHeader />
        </Container>
        <NetflixFooter />
      </>
    );
  }
}

export default Home;
