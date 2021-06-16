import React, {Component} from "react";
import Heart from "./heart";
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component{
    state = {
        movies: getMovies()
    };

    render() {
        const count = this.state.movies.length;
        if (count === 0) {
            return <p>There are no movies in the database.</p>
        } else {
            return (
                <div>
                    <p>Showing {count} movies in the database. <i className="fa fa-bath" aria-hidden="true"> </i>
                    </p>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th> </th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Heart/></td>
                                <td>
                                    <button onClick={() => this.handleDelete(movie)}
                                            className='btn btn-sm btn-danger'>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    }

}

export default Movies;