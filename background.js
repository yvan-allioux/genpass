chrome.runtime.onInstalled.addListener(function () {
    alert("merci d'avoir instaler mon extention !");
});
chrome.browserAction.onClicked.addListener(function (tab) {
            chrome.tabs.executeScript({
                code: 'let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[{]}\\|,<.>?";let result = "";let varTest = 0;const longeurMdp = 15;do {let aleatoir = Math.floor(Math.random() * chars.length);let extract = chars.substr(aleatoir, 1);result = result + extract;varTest++;} while (varTest != longeurMdp);document.activeElement.value = result;'
            });
    });
/*chrome.webNavigation.onCompleted.addListener(function () {
    alert("page charger");
}, {url: [{urlMatches: "youtube.com"}]} );*/
//0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[{]}\\|;'\",<.>/?