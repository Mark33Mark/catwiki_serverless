const kittyDb = require( "./utils/kittyDb.json" );

exports.handler = (event, context, callback) => {

  const selectedBreed = JSON.parse(event.body);
  console.log("selected breed = ", selectedBreed);

  const breeds = kittyDb[kittyDb.findIndex((item) => item.name === selectedBreed.breed)];
  console.log(breeds);

  context.callbackWaitsForEmptyEventLoop = false;

          callback( null, {
              statusCode: 200,
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(breeds)
            })
        }
