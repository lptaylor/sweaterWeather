// This file is in the entry point in your webpack config.
function getData (type, location) {
  fetch(`https://enigmatic-everglades-87289.herokuapp.com/api/v1/${type}?location=${location}`)
  .then(result => {
    return result.json();
  })
  .then(body => {
    console.log(body.data);
  })
  .catch(error => console.log(error));
}

getData('backgrounds', "Denver,CO")
getData('forecast', "Denver,CO")
