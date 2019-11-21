const axios = require('axios');

function checkUserExists (username, password) {
    return axios({
        method : "POST",
        url : 'http://localhost:3002/testPost',
        data : { username, password }
    });
    // return username.concat(password);
}
module.exports = checkUserExists;