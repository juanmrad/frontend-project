console.log("JS loaded as expected")
let checkbox;
// element will receive the event.
// execution. Code that will be execute when the event happens.

let handleClick = (event) => {
  event.stopPropagation();
  console.log('The function was triggered')
  console.log(event);
}

let handleDocumentClick = (event) => {
  console.log('The function was triggered on click of document')
  console.log(event);
}

let handleSubmit = (event) => {
  event.preventDefault();
  console.log("form submitted")
  console.log(event)
  console.log(event.target.email)
  console.log(event.target.email.value)
  console.log(event.target.full_name)
  console.log(event.target.full_name.value)
  console.log(event.target.cars)
  console.log(event.target.cars.value)
  console.log(event.target.fav_language)
  console.log(event.target.fav_language.value)
  console.log(event.target.hated_language)
  console.log(event.target.hated_language.value)

  checkbox = event.target.hated_language;
  checkbox.forEach((check) => {
    console.log(check.checked);
    if (check.checked) {
      console.log(check.value)
    }
  })

  document.getElementById('testing').innerHTML += `<h1 class="car_label">testing</h1>`
}

document.addEventListener('click', handleDocumentClick)

let title = document.getElementById("title");
title.addEventListener('click', handleClick);

let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit)




