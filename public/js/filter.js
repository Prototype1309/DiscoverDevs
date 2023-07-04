function filterResults() {
  var location = document.getElementById('location').value.toLowerCase();
  var experience = document.getElementById('experience').value;
  var technologies = document
    .getElementById('technologies')
    .value.toLowerCase();

  var devs = document.getElementsByClassName('dev');

  for (var i = 0; i < devs.length; i++) {
    var dev = devs[i];

    var devLocation = dev.getAttribute('data-location').toLowerCase();
    var devExperience = dev.getAttribute('data-experience');
    var devTechnologies = dev.getAttribute('data-technologies').toLowerCase();

    var showDev = true;

    if (location !== '' && devLocation.indexOf(location) === -1) {
      showDev = false;
    }

    if (experience !== '' && devExperience !== experience) {
      showDev = false;
    }

    if (technologies !== '' && devTechnologies.indexOf(technologies) === -1) {
      showDev = false;
    }

    if (showDev) {
      dev.style.display = 'block';
    } else {
      dev.style.display = 'none';
    }
  }
}
