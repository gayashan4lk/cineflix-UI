import React, {Component} from "react";

class MovieDetails extends Component {
    handleSave = () => {
        this.props.history.replace("/movies");
    }

    render() {
        /*console.log(this);
        console.log(this.props);
        console.log(this.props.match);
        console.log(this.props.match.params);
        console.log(this.props.match.params.id);*/

        return (
            <div className="movie-form-container">
                <h1>Movie id : {this.props.match.params.id}</h1>
                <button className="btn btn-primary btn-sm" onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default MovieDetails;