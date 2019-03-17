// This file is in the entry point in your webpack config.
let backgroundUrl;

function getForecast (location) {
  fetch(`https://enigmatic-everglades-87289.herokuapp.com/api/v1/${type}?location=${location}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // make variable to hold the object that returns to be processed
    return data.data;
  })

  .catch(error => console.log(error));
};
function getBackground(location) {
  fetch(`https://enigmatic-everglades-87289.herokuapp.com/api/v1/backgrounds?location=${location}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    backgroundUrl = data.data.attributes.url;
    return changeBackground(backgroundUrl)
  })
  .catch(error => console.log(error));
};

function changeBackground(newSrc) {
  document.body.style.backgroundImage = `url(${backgroundUrl})`;
};

function hideSearch() {
  document.querySelector('.site-title').style.display = 'none';
  document.querySelector('.search-box').style.display = 'none';
};

function showForecast() {

}

document.getElementById('weather-submit').addEventListener('click', function() {
  let searchLocation = document.getElementById('location-search-box').value;
  let forecastData = getData('forecast', searchLocation);
  let backgroundData = getBackground(searchLocation);
  hideSearch();
})
