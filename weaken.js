chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: chrome.extension.getURL("rsa.fail.js")};
  },
  // filters
  {
    urls: [
      "*://*/*/rsa.min.js"
    ],
    types: ["script"]
  },
  // extraInfoSpec
  ["blocking"]);
