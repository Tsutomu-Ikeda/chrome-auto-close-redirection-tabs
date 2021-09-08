chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.match(/https:\/\/(.+\.)?slack\.com\/archives\/.+/)
  ) {
    setTimeout(() => {
      chrome.tabs.remove(tabId);
    }, 1000);
  }
});
