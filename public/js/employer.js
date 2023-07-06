let registrationForm = document.querySelector('form');

registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(e);
  const [
    reqFirstName,
    reqLastName,
    reqEmail,
    reqPassword,
    reqConfirm,
    reqCompanyName,
    reqRole,
  ] = [
    e.target[0].value,
    e.target[1].value,
    e.target[2].value,
    e.target[3].value,
    e.target[4].value,
    e.target[5].value,
    e.target[6].value,
  ];

  if (reqPassword != reqConfirm) {
    alert('Passwords don\'t match')
    return
  }

  const createNewEmployer = await fetch('/api/employerUser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      first_name: reqFirstName,
      last_name: reqLastName,
      company: reqCompanyName,
      email: reqEmail,
      password: reqPassword,
      role: reqRole,
    }),
  });

  if (createNewEmployer.ok) {
    console.log(createNewEmployer);
    document.location.replace('/devs');
  } else {
    console.log(response);
  }
});
