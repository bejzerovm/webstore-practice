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
let LogInStatus = ''






const logIn = () => {
  let email = emailBox.value
  let password = passwordBox.value
  if (emails.includes(email) && passwords.includes(password)) {
    LogInStatus = "logged-in"
    localStorage.setItem('status', JSON.stringify(LogInStatus))
    console.log('You Logged In')
    window.location.href = "webstore-logged-in.html"
  } else {
      console.log('wrong')
  }
}





//View






//Controller