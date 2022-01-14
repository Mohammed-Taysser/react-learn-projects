import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import Spinner from "./Spinner";

class YouTubeSearchEngin extends React.Component {
  state = {
    videos: [],
    current_video: {},
  };

  componentDidMount() {
    this.onFormSubmit("react course");
  }
  onVideoClick = (clicked_video) => {
    this.setState({ current_video: clicked_video });
  };

  onFormSubmit = async (query) => {
    if (query) {

      await Youtube.get("/search", {
        params: { q: query },
      })
        .then((response) => {
          // console.log(response.data.items[0]);
          this.setState({
            videos: response.data.items,
            current_video: response.data.items[0],
          });
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

  view_message() {
    if (Object.keys(this.state.current_video).length > 0) {
      return (
        <div className="row justify-content-center">
          <div className="col-lg-7 my-3">
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${this.state.current_video.id.videoId}`}
                title={this.state.current_video.snippet.title}
              ></iframe>
            </div>
          </div>
          <div className="col-lg-5 my-3">
            {this.state.videos.map((video) => {
              return <VideoItem video={video} onClick={this.onVideoClick} />;
            })}
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }

  render() {
    return (
      <div className={``}>
        <SearchBar
          onFormSubmit={this.onFormSubmit}
          result_number={this.state.videos.length}
        />

        {this.view_message()}
      </div>
    );
  }
}

const VideoItem = (props) => {
  return (
    <div className="d-flex align-items-center mb-3" key={props.video.id.videoId} onClick={e=> props.onClick(props.video)} style={{cursor: 'pointer'}}>
      <div className="flex-shrink-0">
        <img src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.title} />
      </div>
      <div className="flex-grow-1 mx-3">
        <h6> {props.video.snippet.title.slice(0, 50)} </h6>
        <p className="text-muted small"> {`${props.video.snippet.description.slice(0, 50)}....`} </p>
      </div>
    </div>
  );
};

export default YouTubeSearchEngin;
