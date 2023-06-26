const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});