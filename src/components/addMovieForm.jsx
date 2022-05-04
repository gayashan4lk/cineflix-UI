import Form from './common/form';
import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';
import { saveMovie } from '../services/fakeMovieService';
import React from 'react';
import { withRouter } from 'react-router-dom';

class AddMovieForm extends Form {
	state = {
		data: {
			title: '',
			genreId: '',
			numberInStock: '',
			dailyRentalRate: '',
		},
		errors: {},
		genres: [],
	};
	schema = {
		title: Joi.string().required().label('Title'),
		genreId: Joi.string().required().label('Genre'),
		numberInStock: Joi.number()
			.integer()
			.min(0)
			.required()
			.label('Number in Stock'),
		dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate'),
	};

	doSubmit() {
		const data = this.state.data;
		console.log('data:', data);
		const movie = {
			_id: '',
			title: data.title,
			genre: {
				_id: data.genreId,
				name: '',
			},
			numberInStock: Number(data.numberInStock),
			dailyRentalRate: Number(data.dailyRentalRate),
		};
		console.log('movie:', movie);
		const success = saveMovie(movie);
		console.log('Movie submitted:', success);
		this.props.history.push('/movies');
	}

	componentDidMount() {
		const genres = [{ _id: '', name: '' }, ...getGenres()];
		this.setState({ genres: genres });
	}

	render() {
		return (
			<div className='addmovie-form-container'>
				<h1>Movie Form</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('title', 'Title')}
					{this.renderSelect('genreId', 'Genre', this.state.genres)}
					{this.renderInput('numberInStock', 'Number in Stock')}
					{this.renderInput('dailyRentalRate', 'Rate')}
					{this.renderButton('submit', 'Save')}
				</form>
			</div>
		);
	}
}
export default withRouter(AddMovieForm);
