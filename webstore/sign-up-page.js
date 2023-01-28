//Model







const signUp = () => {
  const password = passwordBox.value
  const email = emailBox.value
  if (email.length != 0 && password.length != 0 )  {
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('password', JSON.stringify(password))
  } else { 
    passwordBox.placeholder='Enter your password'
    emailBox.placeholder='Enter your email'

  }

}

//View








//Controller




