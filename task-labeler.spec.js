describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertDeepEquals(tasksTypes([1, 2, 3, 4, 5],2) , [2, 3, 0])

Test.assertDeepEquals(tasksTypes( [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8],1) ,[2,8,2] )

Test.assertDeepEquals(tasksTypes([1],1) ,[1, 0, 0] )

Test.assertDeepEquals(tasksTypes([8],1) , [0, 1, 0])

Test.assertDeepEquals(tasksTypes([4, 14, 16],7) , [1, 1, 1])

})})