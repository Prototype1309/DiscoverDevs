const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', () => {
  const userType = localStorage.getItem('discover-devs-user-type');
  // const id = localStorage.getItem('discover-devs-user-id');

  fetch(`/api/${userType}/profile`, { method: 'DELETE' })
    .then((response) => {
      if (response.ok) {
        console.log('Profile deleted successfully!');
      } else {
        console.error('Failed to delete profile.');
      }
    })
    .catch((error) => {
      console.error('An error occurred during deletion:', error);
    });
});
