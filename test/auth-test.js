const axios = require('axios');
module.exports = () => {
  console.log('get a token');
  axios.get('http://localhost:4030/guest-token').then(response => {
    callShoppingCartWithToken(response.data.token);
  });
};

function callShoppingCartWithToken(token) {
  const headers = { Authorization: `Bearer ${token}` };
  const opts = { headers };
  axios
    .get('http://localhost:4030/cart', opts)
    .then(response => console.log(response.data.cart))
    .catch(err => console.log(err.response.data));
}
