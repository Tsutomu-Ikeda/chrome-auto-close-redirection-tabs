chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.match(/https:\/\/(.+\.)?(slack\.com\/archives\/.+|zoom.us\/j\/)/)
  ) {
    setTimeout(() => {
      chrome.tabs.remove(tabId);
    }, 1000);
  }
});
