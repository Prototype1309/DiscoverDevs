let registrationForm = document.querySelector('form')
let userType


registrationForm.addEventListener('submit', async (e) => {

    e.preventDefault()
    console.log(e)
    const [reqFirstName, reqLastName, reqYrsExperience, reqLocation, reqEmail, reqPassword, reqConfirm, reqPictureLink] = [
        e.target[0].value,
        e.target[1].value,
        e.target[2].value,
        e.target[3].value,
        e.target[4].value,
        e.target[5].value,
        e.target[6].value,
        e.target[7].value
    ]

    if (reqPassword != reqConfirm) {
        alert('Passwords don\'t match')
        return
    }

    let techs = registrationForm.querySelectorAll('input[id*="tech"]')
    let checkedTechs = []
    for (let i=0; i< techs.length; i++) {

        if (techs[i].checked) {
            checkedTechs.push(techs[i].id.match(/\d+/)[0])
        }
        
    }

    const createNewDev = await fetch('/api/devuser', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            first_name: reqFirstName,
            last_name: reqLastName,
            yrs_experience: reqYrsExperience,
            email: reqEmail,
            password: reqPassword,
            location: reqLocation,
            picture_link: reqPictureLink,
            technologies: checkedTechs,

        })
    })

    

    if (createNewDev.ok) {
        console.log(createNewDev)

        if (localStorage.getItem('discover-devs-user-type')) {
            userType = localStorage.getItem('discover-devs-user-type')
            console.log(`Returning user`)
        } else {
            console.log(`New user`)
            localStorage.setItem('discover-devs-user-type','devUser')
        }
        
        document.location.replace('/devs')
    } else {
        console.log(response)
    }


})