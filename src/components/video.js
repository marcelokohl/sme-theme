import React from "react";

const Video = props => {
  const { url, className, style } = props;
  let c = "Video" + (className?" "+className:'');
  return (
    <div className={c} style={style}>
      <iframe src={url}></iframe>
    </div>
  );
};

export default Video;
