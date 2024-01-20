function validatePassword() {
    let password = document.getElementById("password").value;
    let errorDisplay = document.getElementById("errorDisplay");
    let isValid = true;
    let result= document.querySelector('#result');

    if (password.length < 8) {
        isValid = false;
        result.innerText = "The password must be at least 8 characters or longer";
        result.classList.add('selected2');
    } else if (password.length > 28) {
      isValid = false;
      result.innerText = "The password cannot be longer than 28 characters";
      result.classList.add('selected2');
    } else if (!/[A-Z]/.test(password)) {
      isValid = false;
      result.innerText = "Your password must contain at least one capital letter";
      result.classList.add('selected2');
    } else if (!/[a-z]/.test(password)) {
      isValid = false;
      result.innerText = "Your password must contain at least one lower case letter";
      result.classList.add('selected2');
    } else if (!/\d/.test(password)) {
      isValid = false;
      result.innerText = "The password must contain at least one number";
      result.classList.add('selected2');
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      isValid = false;
      result.innerText =  "The password must contain at least one special character";
      result.classList.add('selected2');
    } else if (isValid) {
      result.innerText = "Password is Strong!";
      result.classList.add('selected');
  }

  document.querySelector('#again').onclick = playAgain;
  document.querySelector('#again').innerHTML = 'Check Again!';
}
    
function playAgain() {
  location.reload();

  let button =  document.querySelector('#again')
}
