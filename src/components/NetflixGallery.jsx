import { Component } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
class NetflixGallery extends Component {
  state = {
    movies: [],
    isLoaded: false,
    hasError: false,
    errorCode: "",
    settings: {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
    },
  };

  componentDidMount = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=bcfdeef7&s=" + this.props.search);
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ movies: await data.Search, isLoaded: true });
      } else {
        console.log(resp);
        throw resp.status;
      }
    } catch (error) {
      this.setState({ hasError: true, isLoaded: true, errorCode: error });
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h2 className="h4">{this.props.search}</h2>
        {this.state.hasError && (
          <Alert className="d-flex justify-content-center" variant="danger">
            <p className="m-0">
              <span>Error</span> <b>{this.state.errorCode}</b>
            </p>
          </Alert>
        )}
        {this.state.isLoaded ? (
          <Slider {...this.state.settings}>
            {this.state.movies.map(movie => {
              return (
                <div className="slick-item" key={movie.imdbID}>
                  <img src={movie.Poster} alt="movie-poster" height={"100%"} />
                </div>
              );
            })}
          </Slider>
        ) : (
          <Spinner animation="border" variant="secondary" />
        )}
      </>
    );
  }
}

export default NetflixGallery;
