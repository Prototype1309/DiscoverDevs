let logoutButton = document.getElementById('logout-button')

// Handle logout span button functionality & api call
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {

        const userType = localStorage.getItem('discover-devs-user-type')

        const response = await fetch(`/api/${userType}/logout`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            console.log('Logged out')
            document.location.replace('/');
        } else {
            alert(response.statusText)
        }
    
    })
}
