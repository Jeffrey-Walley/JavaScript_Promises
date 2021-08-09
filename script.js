// ex: Callback code
/* 
firstRequest(function(response) {
    secondRequest(response, function(nextResponse) {
        thirdRequest(nextResponse, function(finalResponse) {
            console.log('Final Response: ' + finalResponse);
        }, failureCallback);
    }, failureCallback);
}, failureCallback); 
*/

// ex: Promise code   // this is called 'Chained 
/*
firstRequest().then(function(response) {
    return secondRequest(response);
}).then(function(nextResponse) {
    return thirdRequest(nextResponse);
}).then(function(finalResponse) {
    console.log('Final Response: ' + finalResponse);
}).catch(failureCallback);
*/

const examplePromise = new Promise((resolve, reject) => {
    let connection = !true; // makes it false and connection is refused

    if (connection) {
        resolve('Connection Established');
    } else {
        reject('Connection Refused');
    }
});

examplePromise.then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
});

const promise2 = new Promise((resolve, reject) => {
    let spaghetti = true;

    if (spaghetti) {
        resolve("You Get Spaghetti!");
    } else {
        reject("No Spaghetti for you!!!");
    }
})

promise2.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)

});