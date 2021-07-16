import React, {Component} from "react";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import {paginate} from "../utilities/paginate";
import _ from "lodash";
import {NavLink} from "react-router-dom";

class Movies extends Component{
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn : { path: "title", order: "asc" }
    };

    componentDidMount() {
        //TODO : if there is no id here React display a warning.
        // How to get rid of that other than hardcode id?
        const genres = [{ _id:"", name: "All Genres"}, ...getGenres()];

        this.setState({ movies: getMovies(), genres: genres});
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies:movies});
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    handleSort = (path) => {
        // console.log(path);
        const sortColumn = { ...this.state.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.setState({ sortColumn });
    };

    render() {
        const count = this.state.movies.length;
        console.log(this.state.movies);

        // Object destructuring
        const {
            pageSize,
            currentPage,
            selectedGenre,
            movies: allMovies,
            sortColumn
        } = this.state;

        if (count === 0) {
            return <p>There are no movies in the database.</p>
        } else {

            const filtered = selectedGenre && selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id)
                : allMovies;

            const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

            const movies = paginate(sorted, currentPage, pageSize);

            return (
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            items={this.state.genres}
                            selectedItem={selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <NavLink to="/movies/new">
                            <button className="btn btn-primary mb-3">New Movie</button>
                        </NavLink>
                        <div className="movie-container">
                            <p>Showing {filtered.length} movies in the database. <i className="bi bi-heart"> </i>
                            </p>
                            <MoviesTable
                                movies={movies}
                                onDelete={this.handleDelete}
                                onLike={this.handleLike}
                                onSort={this.handleSort}
                            />

                            <Pagination
                                itemsCount={filtered.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
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