function getUser() {
    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('user1')
            //reject('some error happened')
        }, 5000)
    })
    return myPromise
}

function getComments() {
    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('comments')
            //reject('some error happened')
        }, 5000)
    })
    return myPromise
}

/*var userPromise = getUser()
.then(function (result) {
    console.log('user resolved:', result)
    return 
})
.catch(function (err) {
    console.log('error:', err)
})

getComments().then(function (comments) {
    console.log('comments:', comments)
})
.catch(function (err) {
    console.log('error:', err)
})
console.log('promise:', userPromise)*/

var promises = Promise.all([getUser(), getComments()])
.then(results => {
    console.log(results)
})
.catch(function (err) {
    console.log('error:', err)
})

