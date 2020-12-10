const inputTel = document.getElementById('tel'),
  telErrorMsg = document.querySelector('.error-msg'),
  popupForm = document.querySelector('.popup-form'),
  slider = document.querySelector('.slider');


//Validation
inputTel.addEventListener('keypress', function (event) {
  if (!/[+0-9 -]/g.test(event.key)) {
    event.preventDefault()
    telErrorMsg.classList.remove('hidden');
  } else {
    telErrorMsg.classList.add('hidden');
  }
});


popupForm.addEventListener('click', function ({target}) {
  if (target.getAttribute('data-popup')) {
    this.classList.add('hidden')
  }
})

slider.addEventListener('click', function ({target}) {
  if (target.getAttribute('data-popup')) {
    popupForm.classList.remove('hidden')
  }
})


