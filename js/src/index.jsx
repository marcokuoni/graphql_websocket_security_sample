import React from "react";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";

import Loading from './components/Loading';

import configMap from "Utils/GetGlobals";
import SetConfigMap from "Utils/SetConfigMap";
import log from "Log";

const LoadableSPA = loadable(() => import("./components/SPA"), {
  fallback: <Loading/>
});

window.concrete5_graphql_websocket_security_sample = (function() {
  const configModule = function(input_map) {
    SetConfigMap({
      input_map: input_map,
      settable_map: configMap.settable_map,
      config_map: configMap
    });
  };

  const initModule = function() {
    ReactDOM.render(
      <LoadableSPA />,
      document.querySelector("#spa")
    );

    log("It is running, jap", true);
  };

  return {
    configModule: configModule,
    initModule: initModule
  };
})();
