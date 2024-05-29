const btn = document.querySelector('.btn-1');
const titleValue = document.querySelector('.titleValue')
const selectedTitle = document.querySelector('.selectedtitle')
if (btn) {
    btn.addEventListener('click', async () => {
        let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

        chrome.scripting.executeScript(
            {
                target: {tabId: tab.id},
                function: pickTitle
            }, async(titleResult)=>{
                const [data]= titleResult;
                if(data.result){
                    const tabTitle = data.result
                    titleValue.innerText = tabTitle
                }
                console.log(titleResult)
            },
            
        );
    });
} else {
    console.error('Button with class .btn-1 not found');
}


function pickTitle(){
    console.log(document.title)
    const title = document.title
    return title
}
