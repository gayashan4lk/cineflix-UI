import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';

class Row extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.genre}</td>
                <td>{this.props.inStock}</td>
                <td>{this.props.rentalRate}</td>
                <td><button id={this.props.id} className='btn btn-secondary btn-sm btn-danger'>Delete</button></td>
            </tr>
        );
    }
}

class Movie extends Component {
    state = {
        movies: getMovies(),
    };

    movieItems = this.state.movies.map(
        (movie) =>
            <Row
                id={movie._id}
                genre={movie.genre.name}
                title={movie.title}
                inStock={movie.numberInStock}
                rentalRate={movie.dailyRentalRate}
            />
    );

    render() {
        return (
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.movieItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movie;
