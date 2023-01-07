const axios = require('axios');


exports.handler = async (event, context, callback) => {

  const breedID = JSON.parse(event.body);
  console.log("selected breed id = ", breedID);


  context.callbackWaitsForEmptyEventLoop = false;

    const pics = await axios({
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "x-api-key": process.env.API_KEY
      },
      url: `https://api.thecatapi.com/v1/images/search?order=ASC&limit=25&breed_id=${breedID}`
})
 .then(response => {
    console.log(response.data);
    return JSON.stringify(response.data)
 })
 .catch(error => {
  return {
    statusCode: 422,
    body: `Error: ${error}`
  }
})

          callback( null, {
              statusCode: 200,
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(pics)
            })
        }
