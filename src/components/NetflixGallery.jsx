import { Component } from "react";
import { Alert, Carousel, Col, Row, Spinner } from "react-bootstrap";

class NetflixGallery extends Component {
  state = {
    movies: [],
    isLoaded: false,
    hasError: false,
    errorCode: "",
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
          <Row className="g-1 grid mb-5 flex-nowrap py-3">
            {this.state.movies.map(movie => {
              return (
                <Col xs={6} md={3} lg={2}>
                  <img src={movie.Poster} alt="movie-poster" />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Spinner animation="border" variant="secondary" />
        )}
      </>
    );
  }
}

export default NetflixGallery;
