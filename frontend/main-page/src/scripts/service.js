import axios from 'axios';

const request = {
    email: email,
    userPassword: password
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