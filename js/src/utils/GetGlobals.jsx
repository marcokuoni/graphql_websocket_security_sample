const configMap = {
  settable_map: {
    showDebugInfos: true,
    productivMode: true,
    secureProtocol: true,
    graphqlUrl: true,
    websocketUrl: true,
    anonymusTokens: true
  },
  showDebugInfos: true,
  productivMode: false,
  secureProtocol: null,
  graphqlUrl: null,
  websocketUrl: null,
  anonymusTokens: null
};

const constants = {
  authToken: "authToken",
  refreshToken: "refreshToken"
};

export default configMap;
export {
    constants
}