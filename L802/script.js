const promise1 = new Promise((resolve, reject) => {
    let seconds = null;
    setTimeout(() => {
        seconds = new Date().getSeconds();
        if (seconds != null) {
            resolve(seconds);
        } else {
            reject('წამები არ არი, ვერ ჩამეიტანეს');
        }
    }, 1000);
})
const promise2 = new Promise((resolve, reject) => {
    let minutes = null;
    setTimeout(() => {
        minutes = new Date().getMinutes();
        if (minutes != null) {
            resolve(minutes);
        } else {
            reject('წუთები არ არი, ვერ ჩამეიტანეს');
        }
    }, 2000);
})
const promise3 = new Promise((resolve, reject) => {
    let hour = null;
    setTimeout(() => {
        hour = new Date().getHours();
        if (hour != null) {
            resolve(hour);
        } else {
            reject('საათები არ არი, ვერ ჩამეიტანეს');
        }
    }, 3000);
})

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        let sum = 0;
        values.forEach(value => {
            sum += value;
        });
        console.log(sum);
    })
    .catch(error => console.log(error));