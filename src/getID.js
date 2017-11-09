
var selectedText = "";
if (window.getSelection) {
    selectedText = window.getSelection().toString();
} else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
}
if(selectedText.length>0){
    chrome.runtime.sendMessage({selectedText: selectedText});
}
