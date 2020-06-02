let sleepTask = function (str) {
    return new Promise((reflect, resole) => {
        setTimeout(function () {
            return reflect(str)
        }, 10)
    })
}
Promise.resolve()
    .then(() => {
        return sleepTask("hello ")
    })
    .then((value) => {
        return sleepTask(value + "lagou ")
    })
    .then((value) => {
        return sleepTask(value + "I ♥ U")
    })
    .then((value) => {
        console.log(value);
    })