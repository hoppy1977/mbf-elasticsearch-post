var request = require('request');

'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    event.Records.forEach((record) => {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);

// *******************
        request.post(
            'https://search-mbf-ti72ai7ynsdbshxifgym4z7mhy.ap-southeast-2.es.amazonaws.com/mbf/temperature',
            {   
                json:
                {
                    "TimeStamp":Date.now().toString(),
                    "beerTemperature":"999",
                    "fridgeTemperature":"888",
                    "roomTemperature":"777"
                }
            },
            function (error, response, body) {
                if (!error && response.statusCode == 201) {
                    console.log(body)
                }
                else
                {
                    console.log("Error");
                }
            }
        );
// *******************
    });

    callback(null, `Successfully processed ${event.Records.length} records.`);
};
