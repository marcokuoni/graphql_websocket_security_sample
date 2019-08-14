import React from "react";
import Loadable from "react-loadable";
import Loading from "../components/Loading";

const LoadableAuthButton = Loadable({
  loader: () => import("../components/AuthButton"),
  loading: Loading
});

class Me extends React.Component {
  render() {
    return (
      <div>
        Me
        <LoadableAuthButton />
      </div>
    );
  }
}
export default Me;
