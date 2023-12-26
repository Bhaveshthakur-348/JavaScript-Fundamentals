
/* Promise.all() */

const P1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 1000)
})

const P2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 3000)
    // setTimeout(() => reject("P2 Fail"), 3000)
})

const P3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 2000)
})

Promise.all([P1, P2, P3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err)
    })



/* Promise.allSettled() */

// const P1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 1000)
// })

// const P2 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("P2 Success"), 3000)
//     setTimeout(() => reject("P2 Fail"), 3000)
// })

// const P3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000)
// })

// Promise.allSettled([P1, P2, P3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err)
//     })

/* Promise.Race() */

// const P1 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("P1 Success"), 1000)
//     setTimeout(() => reject("P1 Fail"), 1000)
// })

// const P2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success"), 3000)
// })

// const P3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success"), 2000)
// })

// Promise.race([P1, P2, P3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err)
//     })


/* Promise.any() */

// case: 1 all success
// const P1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 2000);
// })

// const P2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Success") , 1000);
// })

// const P3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success") , 3000);
// })

// Promise.any([P1, P2, P3])
//     .then((res) => console.log(res))
//     .catch(err => console.error(err))


// case: 2 both success and reject
// const P1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 2000);
// })

// const P2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fail") , 1000);
// })

// const P3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 Success") , 3000);
// })

// Promise.any([P1, P2, P3])
//     .then((res) => console.log(res))
//     .catch(err => console.error(err))


// case: 3 All rejected
// const P1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P1 Fail"), 2000);
// })

// const P2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 Fail") , 1000);
// })

// const P3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P3 Fail") , 3000);
// })

// Promise.any([P1, P2, P3])
//     .then((res) => console.log(res))
//     .catch(err => console.error(err))