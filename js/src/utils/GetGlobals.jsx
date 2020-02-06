const configMap = {
  settable_map: {
    showDebugInfos: true,
    productivMode: true,
    secureProtocol: true,
    graphqlUrl: true,
    refreshTokenUrl: true,
    logoutUrl: true,
    websocketUrl: true,
    anonymusToken: true
  },
  showDebugInfos: true,
  productivMode: false,
  secureProtocol: null,
  graphqlUrl: null,
  refreshTokenUrl: null,
  logoutUrl: null,
  websocketUrl: null,
  anonymusToken: null
};

const globalNames = {
    authToken: "authToken",
  };
  
  export default configMap;
  export { globalNames };