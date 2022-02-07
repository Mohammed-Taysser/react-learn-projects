import React from 'react';
import Masonry from './Masonry';
import SearchBar from '../../SearchBar';
import UnsplashAPI from '../../../api/Unsplash';
import ImageNotFound from '../../../assets/images/image-not-found.png';

class Unsplash extends React.Component {
  state = {
    images: [],
  };

  onFormSubmit = async (query) => {
    if (query) {
      await UnsplashAPI.get('/search/photos', {
        params: { query: query },
      })
        .then((response) => {
          this.setState({ images: response.data.results });
        })
        .catch((error) => {
          // handle error
        })
        .then(() => {
          // always executed
        });
    } else {
      console.log(query); // no query entered
    }
  };

  render_message = () => {
    if (this.state.images.length > 0) {
      return <Masonry images={this.state.images} />;
    } else {
      return (
        <div className='nice-shadow text-center'>
          <img
            src={ImageNotFound}
            alt='no result found'
            className='img-fluid'
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div className={``}>
        <SearchBar
          onFormSubmit={this.onFormSubmit}
          result_number={this.state.images.length}
          auto_submit={false}
          className='mb-4'
        />
        {this.render_message()}
      </div>
    );
  }
}

export default Unsplash;
