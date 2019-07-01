import React from "react";

const Progress = props => {
  const { className, progress } = props;
  let c = "Progress " + (className?className:'');
  return (
    <div className={c}>
      <div className="progress-bar" style={{width: progress+'%'}}></div>
    </div>
  );
};

export default Progress;
