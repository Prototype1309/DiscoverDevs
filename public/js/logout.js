let logoutButton = document.getElementById('logout-button')

// Handle logout span button functionality & api call
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        const response = await fetch('/api/devUser/logout', {
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
