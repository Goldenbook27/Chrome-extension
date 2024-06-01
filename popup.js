document.getElementById('start').addEventListener('click', () => {
    const links = document.getElementById('links').value.split('\n');
    links.forEach(link => {
      chrome.tabs.create({ url: link.trim() });
    });
  });
  