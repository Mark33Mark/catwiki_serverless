const kittyDb = require( "./utils/kittyDb.json" );

exports.handler = (event, context, callback) => {

  const breeds = kittyDb.map((cats)=>cats.name)
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
