import { Component } from "react";
import NetflixNav from "../components/NetflixNav";
import NetflixFooter from "../components/NetflixFootter";

class Home extends Component {
  render() {
    return (
      <>
        <NetflixNav />;
        <NetflixFooter />
      </>
    );
  }
}

export default Home;
