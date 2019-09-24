const assert = require("assert")
const Todo = require("./todo")

const todo = new Todo()
let testsComplete = 0

function deleteTest() { 
    todo.add("Delete Me")
    assert.equal(todo.length, 1, "1 item should exists!")

    todo.deleteAll()
    assert.equal(todo.length, 0, "No item should exists!")

    testsComplete++
}

function addTest() { 
    todo.deleteAll()
    todo.add("Added")
    assert.notEqual(todo.length, 0, "1 item should exist!")
    testsComplete++
}

deleteTest()
addTest()

console.log(testsComplete)