import { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class NetflixModal extends Component {
  state = {
    show: true,
  };

  componentDidMount = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=bcfdeef7&i=" + this.props.imdbID);
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ movie: data });
      } else {
        throw new Error("Errore nella fetch del dato");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div
        className={this.state.show ? "modal show position-absolute top-0" : ""}
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.movie && this.state.movie.Title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{this.state.movie && this.state.movie.Plot}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ show: false })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default NetflixModal;
