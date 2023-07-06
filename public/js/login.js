let loginButton = document.querySelector('form > button')

loginButton.addEventListener('click', async (e) => {
    e.preventDefault()

    const userType = localStorage.getItem('discover-devs-user-type')

    const email = document.querySelectorAll('form > .input-group > input')[0].value.trim()
    const password = document.querySelectorAll('form > .input-group > input')[1].value.trim()

    if (email && password) {
        const response = await fetch(`/api/${userType}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}) 
        })

        if (response.ok) {
            console.log(response.body)
            document.location.replace('/devs')
        } else {
            console.log(response)
        }
    }
})