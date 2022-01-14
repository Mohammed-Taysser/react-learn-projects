import React from "react";
import SearchBar from "./SearchBar";
import Masonry from "./Masonry";
import Unsplash from "../api/Unsplash";

/**
 * - TODO : add history widget
 */

class UnsplashSearchEngin extends React.Component {
  state = {
    images: [],
  };

  onFormSubmit = async (query) => {
    if (query) {
      await Unsplash.get("/search/photos", {
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

  render() {
    return (
      <div className={``}>
        <SearchBar
          onFormSubmit={this.onFormSubmit}
          result_number={this.state.images.length}
          className='mb-4'
        />
        <Masonry images={this.state.images} />
      </div>
    );
  }
}

export default UnsplashSearchEngin;
