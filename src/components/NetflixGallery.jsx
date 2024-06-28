import { Component } from "react";

class NetflixGallery extends Component {
  state = {
    movies: [],
  };
  componentDidMount = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=bcfdeef7&s=" + this.props.search);
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ movies: await data.Search });
      } else {
        throw new Error("Errore nel ritrovamento dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.movies);

    return <h2 className="h4">{this.props.search}</h2>;
  }
}

export default NetflixGallery;
