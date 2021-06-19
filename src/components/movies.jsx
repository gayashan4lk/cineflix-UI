import React, {Component} from "react";
import Heart from "./common/heart";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import {paginate} from "../utilities/paginate";

class Movies extends Component{
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
    };

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres()});
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies:movies});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre});
    }

    render() {
        const count = this.state.movies.length;
        if (count === 0) {
            return <p>There are no movies in the database.</p>
        } else {

            const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);

            return (
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            items={this.state.genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <div className="movie-container">
                            <p>Showing {count} movies in the database. <i className="bi bi-heart"> </i>
                            </p>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th> </th>
                                    <th> </th>
                                </tr>
                                </thead>
                                <tbody>
                                {movies.map(movie => (
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td><Heart liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                                        <td>
                                            <button
                                                onClick={() => this.handleDelete(movie)}
                                                className="btn btn-sm btn-danger">Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <Pagination
                                itemsCount={this.state.movies.length}
                                pageSize={this.state.pageSize}
                                currentPage={this.state.currentPage}
                                onPageChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                </div>


            );
        }
    }

}

export default Movies;