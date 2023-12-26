# JavaScript-Fundamentals

## Promise Methods()

### Promise.all()
Takes an array of promises and returns a single promise. This new promise will be fulfilled with an array of the resolved values of the input promises, in the same order as the input array.
Wait all of them to finish
If any promise in the array is rejected Immediately asap error happend , it will not wait for other promise.

### Promise.allSettled()
Return a new promise is fulfilled with an array of objects, each representing the outcome of the corresponding promise in the input array, whether it was fulfilled or rejected.

Output:
      [
        { status: 'fulfilled', value: 'P1 Success' },
        { status: 'rejected', reason: 'P2 failed' },
        { status: 'fulfilled', value: 'P3 Success' }
      ]

### Promise.race()
It takes an array of promises and returns a result of first settled promise (either fulfilled or rejected) as soon as any of the input 
promises is settled. 

### Promise.any()
It takes an array of promises and wait for first success promise.
If all the promises are rejected then return Aggregate Error(list of all errors [err1, err2, err2])