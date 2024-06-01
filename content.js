window.addEventListener('load', () => {
    const profile = {
      name: document.querySelector('.pv-top-card--list > li').innerText,
      url: window.location.href,
      about: document.querySelector('.pv-about__summary-text').innerText,
      bio: document.querySelector('.pv-oc.about__summary').innerText,
      location: document.querySelector('.pv-top-card--list-bullet').innerText,
      followerCount: parseInt(document.querySelector('.pv-recent-activity-section__follower-count-text').innerText.match(/\d+/)[0]),
      connectionCount: parseInt(document.querySelector('.pv-top-card--list > li:nth-child(3)').innerText.match(/\d+/)[0])
    };
  
    fetch('http://localhost:3000/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    });
  });
  