import React from "react";

const Video = props => {
  const { url, className } = props;
  let c = "Video" + (className?" "+className:'');
  return (
    <div className={c}>
      <iframe src={url}></iframe>
    </div>
  );
};

export default Video;
