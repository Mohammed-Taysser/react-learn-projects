import React, { useState, useEffect } from "react";
import { useVideos } from "../hooks/useYoutube";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

const YouTubeSearchEngin = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, search] = useVideos("react");

  useEffect(() => {
    setCurrentVideo(videos[0]);
  }, [videos]);

  const view_message = () => {
    if (currentVideo) {
      return (
        <div className="row justify-content-center">
          <div className="col-lg-7 my-3">
            <div className="card border-0">
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
                  title={currentVideo.snippet.title}
                ></iframe>
              </div>
              <div className="card-body border mt-1">
                <h4 className="card-title">{currentVideo.snippet.title}</h4>
                <p className="card-text">{currentVideo.snippet.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 my-3">
            {videos.map((video) => {
              return (
                <VideoItem
                  video={video}
                  key={video.id.videoId}
                  onClick={setCurrentVideo}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return <Spinner className="mt-4" />;
    }
  };

  return (
    <div className={``}>
      <SearchBar onFormSubmit={search} result_number={videos.length} />
      {view_message()}
    </div>
  );
};

const VideoItem = (props) => {
  return (
    <div
      className="d-flex align-items-center mb-3 cursor-pointer"
      onClick={(e) => props.onClick(props.video)}
    >
      <div className="flex-shrink-0">
        <img
          src={props.video.snippet.thumbnails.default.url}
          alt={props.video.snippet.title}
        />
      </div>
      <div className="flex-grow-1 mx-3">
        <h6> {props.video.snippet.title.slice(0, 50)} </h6>
        <p className="text-muted small">
          {`${props.video.snippet.description.slice(0, 50)} ...`}
        </p>
      </div>
    </div>
  );
};

export default YouTubeSearchEngin;
