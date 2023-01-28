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
  email = emailBox.value
  password = passwordbox.value
  if (email in emails && password in passwords) {
    LogInStatus = "logged-in"
    localStorage.setItem('status', JSON.stringify(LogInStatus))

  }
}





//View






//Controller