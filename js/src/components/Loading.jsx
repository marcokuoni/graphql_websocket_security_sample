import React from "react";
import configMap from "Utils/GetGlobals";

class Loading extends React.Component {
  render() {
    return (
      <div className="loader text-center">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span className="sr-only">{configMap.loadingText}</span>
      </div>
    );
  }
}

export default Loading;
