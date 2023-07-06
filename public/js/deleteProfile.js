const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', async () => {
  const userType = localStorage.getItem('discover-devs-user-type');
  const userEmail = localStorage.getItem('discover-devs-user-email');

  await fetch(`/api/${userType}/profile?email=${userEmail}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        console.log('Profile deleted successfully!');
        document.location.replace('/');
      } else {
        console.error('Failed to delete profile.');
      }
    })
    .catch((error) => {
      console.error('An error occurred during deletion:', error);
    });
});
