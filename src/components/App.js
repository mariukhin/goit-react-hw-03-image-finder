import React, { Component } from 'react';
import mapper from '../services/helper';
import styles from './stylesApp.css';
import SearchForm from './SearchForm/SearchForm';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import Gallery from './Gallery/Gallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import fetchPics from '../services/pic-api';

export default class App extends Component {
  state = {
    pics: [],
    page: 1,
    inputVal: '',
    isLoading: false,
    isLoadMore: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page: prevPage } = prevState;
    const { page: nextPage, inputVal } = this.state;

    if (prevPage !== nextPage) {
      this.fetchItems(inputVal);
    }
  }

  reset = () => {
    this.setState({
      pics: [],
      page: 1,
      inputVal: '',
      isLoading: false,
      isLoadMore: false,
      error: null,
    });
  };

  fetchItems = inputVal => {
    const { page } = this.state;
    fetchPics(inputVal, page)
      .then(pics => {
        this.setState(prevState => ({
          pics: [...prevState.pics, ...mapper(pics)],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false, isLoadMore: true }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      isLoadMore: false,
      page: prevState.page + 1,
    }));
  };

  formSubmit = ({ inputVal }) => {
    this.reset();
    this.setState({ isLoading: true });
    this.fetchItems(inputVal);
    this.setState({ isLoadMore: true, inputVal });
  };

  render() {
    const { pics, isLoading, error, isLoadMore } = this.state;
    const length = pics.length > 0;
    return (
      <div className={styles.app}>
        <SearchForm onSubmit={this.formSubmit} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {length && <Gallery cards={pics} />}
        {isLoadMore && length && <LoadMoreBtn onLoadMore={this.loadMore} />}
      </div>
    );
  }
}
