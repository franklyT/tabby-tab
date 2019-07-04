/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* TRAY */

chrome.storage.sync.get('tray', (items) => {
  if (items.tray === undefined || items.tray === null) {
  } else if (items.tray === 'show') {
    select('#trayCheckbox').checked = true;
    select('.settings__tray__icon').classList.add('settings__icon--active');
    select('.tray').classList.remove('display-none');
  } else {
    select('#trayCheckbox').checked = false;
    document.querySelector('.settings__tray__icon').classList.remove('settings__icon--active');
    select('.tray').classList.add('display-none');
  }
});

select('#traySlider').addEventListener('click', () => {
  if (select('#trayCheckbox').checked) {
    chrome.storage.sync.set({ tray: 'hide' }, () => {});
  } else {
    chrome.storage.sync.set({ tray: 'show' }, () => {});
  }
  select('.settings__tray__icon').classList.toggle('settings__icon--active');
  select('.tray').classList.toggle('display-none');
});

/* CALENDAR */

chrome.storage.sync.get('calendar', (items) => {
  if (items.calendar === undefined || items.calendar === null) {
  } else if (items.calendar === 'show') {
    select('#calendarCheckbox').checked = true;
    select('.settings__calendar__icon').classList.add('settings__icon--active');
    select('.calendar').classList.remove('display-none');
  } else {
    select('#calendarCheckbox').checked = false;
    document
      .querySelector('.settings__calendar__icon')
      .classList.remove('settings__icon--active');
    select('.calendar').classList.add('display-none');
  }
});

select('#calendarSlider').addEventListener('click', () => {
  if (select('#calendarCheckbox').checked) {
    chrome.storage.sync.set({ calendar: 'hide' }, () => {});
  } else {
    chrome.storage.sync.set({ calendar: 'show' }, () => {});
  }
  select('.settings__calendar__icon').classList.toggle('settings__icon--active');
  select('.calendar').classList.toggle('display-none');
});

/* TOPSITES */

chrome.storage.sync.get('topsites', (items) => {
  if (items.topsites === undefined || items.topsites === null) {
  } else if (items.topsites === 'show') {
    select('#topsitesCheckbox').checked = true;
    select('.settings__topsites__icon').classList.add('settings__icon--active');
    select('#tsites').classList.remove('display-none');
  } else {
    select('#topsitesCheckbox').checked = false;
    document
      .querySelector('.settings__topsites__icon')
      .classList.remove('settings__icon--active');
    select('#tsites').classList.add('display-none');
  }
});

select('#topsitesSlider').addEventListener('click', () => {
  if (select('#topsitesCheckbox').checked) {
    chrome.storage.sync.set({ topsites: 'hide' }, () => {});
  } else {
    chrome.storage.sync.set({ topsites: 'show' }, () => {});
  }
  select('.settings__topsites__icon').classList.toggle('settings__icon--active');
  select('#tsites').classList.toggle('display-none');
});

/* HISTORY */

chrome.storage.sync.get('recentHistory', (items) => {
  if (items.recentHistory === undefined || items.recentHistory === null) {
  } else if (items.recentHistory === 'show') {
    select('#recentHistoryCheckbox').checked = true;
    select('.settings__recent-history__icon').classList.add('settings__icon--active');
    select('#topsites').classList.remove('display-none');
  } else {
    select('#recentHistoryCheckbox').checked = false;
    document
      .querySelector('.settings__recent-history__icon')
      .classList.remove('settings__icon--active');
    select('#topsites').classList.add('display-none');
  }
});

select('#recentHistorySlider').addEventListener('click', () => {
  if (select('#recentHistoryCheckbox').checked) {
    chrome.storage.sync.set({ recentHistory: 'hide' }, () => {});
  } else {
    chrome.storage.sync.set({ recentHistory: 'show' }, () => {});
  }
  select('.settings__recent-history__icon').classList.toggle('settings__icon--active');
  select('#topsites').classList.toggle('display-none');
});

/* WEATHER */
chrome.storage.sync.get('weather', (items) => {
  if (items.weather === undefined || items.weather === null) {
  } else if (items.weather === 'show') {
    select('#weatherCheckbox').checked = true;
    select('.settings__weather__icon').classList.add('settings__icon--active');
    select('#weather-icons').classList.remove('display-none');
    select('#weather').classList.remove('display-none');
  } else {
    select('#weatherCheckbox').checked = false;
    document.querySelector('.settings__weather__icon').classList.remove('settings__icon--active');
    select('#weather-icons').classList.add('display-none');
    select('#weather').classList.add('display-none');
  }
});

select('.slider').addEventListener('click', () => {
  if (select('#weatherCheckbox').checked) {
    chrome.storage.sync.set({ weather: 'hide' }, () => {});
  } else {
    chrome.storage.sync.set({ weather: 'show' }, () => {});
  }
  select('.settings__weather__icon').classList.toggle('settings__icon--active');
  select('#weather-icons').classList.toggle('display-none');
  select('#weather').classList.toggle('display-none');
});