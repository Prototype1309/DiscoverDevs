function filterResults() {
  var location = document.getElementById('location').value.toLowerCase();
  var experience = document.getElementById('experience').value;
  var technologies = document.querySelector('.list-of-techs')
  
  let techs = technologies.querySelectorAll('input[id*="tech"]')
  let checkedTechs = []
  for (let i=0; i< techs.length; i++) {

      if (techs[i].checked) {
          checkedTechs.push(techs[i].id.match(/\d+/)[0])
      }
      
  }

  let queryString = "?"

  checkedTechs.forEach(checkedTech => {
    queryString += `tech=${checkedTech}&`
  })

  if (location) {
    queryString += `location=${location}&`
  }

  if (experience) {
    queryString += `yrs_experience=${experience}&`
  }

  queryString = queryString.slice(0, -1)

  if (queryString) {
    console.log(document.location)
    document.location.replace(document.location.href.match(/.+devs/)[0] + queryString)
  }
}
