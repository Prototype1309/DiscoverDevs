const deleteProfile = document.getElementById('deleteButton');

deleteButton.addEventListener('click', () => {
  fetch('/api/profile/:id', { method: 'DELETE' })
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
