let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');

formBtn.addEventListener('click', () => {
    loginForm.classList.add( 'active' );
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove( 'active' );
});

function redirectToLoginPage() {
    // Redirect the user to the login page
    window.location.href = "Login__.html";
  }


  function  redirectTosignupPage() {
    // Redirect the user to the login page
    window.location.href = "SignUp.html";
  }
 
  