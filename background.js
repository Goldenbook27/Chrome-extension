

let profiles = [];
let scrapedProfiles = [];


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startScraping') {
      
        profiles = request.profiles;
        scrapedProfiles = []; 
        scrapeNextProfile();
    }
});


function scrapeNextProfile() {
    if (profiles.length > 0) {
        const profileUrl = profiles.shift();
        chrome.tabs.create({ url: profileUrl }, (tab) => {
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo, tab) {
                if (tabId === tab.id && changeInfo.status === 'complete') {
                    chrome.tabs.sendMessage(tab.id, { action: 'scrapeProfile' });
                    chrome.tabs.onUpdated.removeListener(listener);
                }
            });
        });
    } else {
      
        chrome.runtime.sendMessage({ action: 'displayProfiles', profiles: scrapedProfiles });
    }
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'profileData') {
       
        scrapedProfiles.push(request.data);
        scrapeNextProfile(); 
    }
});
