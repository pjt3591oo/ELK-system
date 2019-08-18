const rp = require('request-promise');

const options1 = {
  method: 'GET',
  uri: 'http://localhost/test/1',
  json: true 
};

const options2 = {
  method: 'GET',
  uri: 'http://localhost',
  json: true 
};

const options3 = {
  method: 'GET',
  uri: 'http://localhost/test',
  json: true 
};

(async () => {
  setInterval(async () => {
    try {
      const res1 = await rp(options1)
    } catch (err) {
  
    }
  
    try {
      const res2 = await rp(options2)
      console.log(res2)
    } catch (err) {
  
    }
  
    try {
      const res3 = await rp(options3)
    } catch (err) {
  
    }
  }, 600)

})()