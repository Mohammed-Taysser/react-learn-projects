const VideoItem = (props) => {
  return (
    <div
      className="d-flex align-items-center mb-3 cursor-pointer"
      onClick={(e) => props.onClick(props.video)}
    >
      <div className="flex-shrink-0 align-self-stretch">
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

export default VideoItem;
