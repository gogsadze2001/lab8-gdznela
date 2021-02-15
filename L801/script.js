const promise = new Promise((resolve, reject) => {
    let minuteCount = '';
    setTimeout(() => {
        minuteCount = new Date().getMinutes();
        if (minuteCount % 2 == 0) {
            resolve(minuteCount);
        } else {
            reject('არაკორექტული დრო');
        }
    }, 10000);
})

promise.then(
    result => console.log(result),
    error => console.log(error)
)