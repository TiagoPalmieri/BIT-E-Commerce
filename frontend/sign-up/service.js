const axios = require('axios')
const mail = document.getElementById('email').value
const user_pass = document.getElementById('password').value
const request = {
    email: mail,
    userPassword: user_pass
} 

axios.post('localhost:3000/api/v1/auth/register', request, {
    headers: {
    'Content-Type': 'application/json',
    'Authorization': ''
  }
})
  .then(response => {
    console.log('exito');
})
  .catch(error => {
    console.error(error);
});
