//Model

let emails;
let passwords;
const savedPasswords = JSON.parse(localStorage.getItem('passwords'))
const savedEmails = JSON.parse(localStorage.getItem('emails'))

if (Array.isArray(savedEmails)) {
  emails = savedEmails
} else {
  emails = []
}
if (Array.isArray(savedPasswords)) {
  passwords = savedPasswords
} else {
 passwords = []
}





const signUp = () => {
  const password = passwordBox.value
  const email = emailBox.value
  if (email.length != 0 && password.length != 0 )  {
    emails.push(email)
    passwords.push(password)
    localStorage.setItem('emails', JSON.stringify(emails))
    localStorage.setItem('passwords', JSON.stringify(passwords))
    window.location.href = "log-in-page.html"
  } else { 
    passwordBox.placeholder='Enter your password'
    emailBox.placeholder='Enter your email'

  }

}

//View








//Controller




