const equal = require('assert').deepEqual
const taskTypes = require('./task-labeler')

describe("Basic Tests", function(){

// console.log("test", taskTypes([1,2,3,4,5],2))

it("It should work for basic tests.", function(){

    equal(taskTypes([1, 2, 3, 4, 5],2) , [2, 3, 0])

    equal(taskTypes( [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8],1) ,[2,8,2] )

    equal(taskTypes([1],1) ,[1, 0, 0] )

    equal(taskTypes([8],1) , [0, 1, 0])

    equal(taskTypes([4, 14, 16],7) , [1, 1, 1])

})})