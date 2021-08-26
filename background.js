function reddenPage() {
  const div = document.createElement("div");
  div.stybackgroundColor = "red";
  document.body.style.backgroundColor = "red";
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage,
  });
});
