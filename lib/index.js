// This file is in the entry point in your webpack config.
function getForecastData (location) {
  fetch('https://enigmatic-everglades-87289.herokuapp.com/api/v1/forecast?location=denver,co')
  .then(result => {
    return result.json();
  })
  .then(body => {
    console.log(body.data);
  })
  .catch(error => console.log(error));
}

getForecastData("Denver,CO")
