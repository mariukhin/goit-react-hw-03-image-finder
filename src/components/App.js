import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinkit';
import mapper from './helper';
import './styles.css';
import SearchForm from './SearchForm/SearchForm';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import Gallery from './Gallery/Gallery';

const API_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
const API_KEY = '12526060-823e0f4842d06a1c968a99ad8';

export default class App extends Component {
  state = {
    pics: [],
    isLoading: false,
    error: null,
  };

  fetchItems = inputVal => {
    const RESULT_URL = `${API_URL}q=${inputVal.toLowerCase()}&page=2&per_page=12&key=${API_KEY}`;
    axios
      .get(RESULT_URL)
      .then(response => this.setState({ pics: mapper(response.data.hits) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  formSubmit = ({ inputVal }) => {
    this.setState({ isLoading: true });
    this.fetchItems(inputVal);
  };

  render() {
    const { pics, isLoading, error } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.formSubmit} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && (
          <Spinner
            name="ball-spin-fade-loader"
            color="blue"
            className="loader"
          />
        )}
        {pics.length > 0 && <Gallery cards={pics} />}
      </div>
    );
  }
}
