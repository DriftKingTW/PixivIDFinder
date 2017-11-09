var selectedText = "";
var newURL = "";
var setArtwork = false;
var setUser = false;

chrome.contextMenus.create({
    "title": "Find Pixiv Artwork >>",
    "contexts":["all"],
    "onclick": goPixivArtwork
});

chrome.contextMenus.create({
    "title": "Find Pixiv User >>",
    "contexts":["all"],
    "onclick": goPixivUser
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    selectedText = message.selectedText;
    if(setArtwork==true){
        newURL = "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=" + selectedText;
        chrome.tabs.create({ url: newURL });
    }else if(setUser==true){
        newURL = "https://www.pixiv.net/member.php?id=" + selectedText;
        chrome.tabs.create({ url: newURL });
    }
});

chrome.contextMenus.onClicked.addListener(function(){
    chrome.tabs.executeScript(null, {file: "getID.js"});
});

function goPixivArtwork(){
    init();
    setArtwork = true;
}

function goPixivUser(){
    init();
    setUser = true;
}

function init(){
    setArtwork = false;
    setUser = false;
}
