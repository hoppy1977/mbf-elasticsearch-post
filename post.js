var request = require('request');

request.post(
    'https://search-mbf-ti72ai7ynsdbshxifgym4z7mhy.ap-southeast-2.es.amazonaws.com/mbf/temperature',
    {   
        json:
        {
            "TimeStamp":Date.now().toString(),
            "beerTemperature":"999",
            "fridgeTemperature":"888",
            "roomTemperature":"888"
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