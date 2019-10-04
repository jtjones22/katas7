
// forEach()

function newForEach(array, callback){
    for(let i = 0; i < array.length; i ++){
        console.log(callback(array[i]))
    }
}

// map()

function multipleByTwo(element) {
    element = element * 2
    return element
}

let mapArray = [1, 2, 3, 4, 5]

function newMap(array, callback){
    
    let newMapArray = []
    for (let index = 0; index < array.length; index++) {
        newMapArray[index] = callback(array[index])
    }
    console.log(newMapArray)
}

newMap(mapArray, multipleByTwo)


// some()

let newSomeArray = [1, 2, 3, 4, 5]
let newSomeDecision = null

function lessThanThree(element) {
    if(element < 4) {
        newSomedecision = true
    } else {
        newSomedecision = false
    }
    return newSomedecision
}

function newSome(array, callback) {
    let newSomeDecision = false
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            newSomeDecision = true
        }
    }
    console.log(newSomeDecision)
}

newSome(newSomeArray, lessThanThree)

// find()

let newFindArray = [5, 12, 8, 130, 44]
let newFindDecision = null

function lessThanTen(element) {
    if (element < 10) {
        newFindDecision = true
    } else {
        newFindDecision = false
    }
    return newFindDecision
}

function newFind(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index])
        if (newFindDecision === true) {
            console.log(array[index])
            break
        } else {
            continue
        }
    }
}

newFind(newFindArray, lessThanTen)

// findIndex()

let newFindIndexArray = [5, 12, 8, 130, 44]
let newFindIndexDecision = null

function lessThanThirteen(element) {
    if (element > 13) {
        newFindIndexDecision = true
    } else {
        newFindIndexDecision = false
    }
}
function newFindIndex(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index])
        if ( newFindIndexDecision === true) {
            console.log(index)
            break
        } else {
            continue
        }
    }
}

newFindIndex(newFindIndexArray, lessThanThirteen)

// every()

let newEveryArray = [1, 30, 39, 29, 10, 13]
let newEveryDecision = null

function lessThanFourty(element) {
    if(element < 40) {
        newEveryDecision = true
    } else {
        newEveryDecision = false
    }
}

function newEvery(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index])
        if (newEveryDecision === false) {
            break
        } else {
            continue
        }
    }
    console.log(newEveryDecision)
}

newEvery(newEveryArray, lessThanFourty)

// filter()

let newFilterArray = [64, 30, 39, 29, 10, 13]
let emptyNewFilterArray = []
let newFilterDecision = null

function moreThanFifteen(element) {
    if (element > 15) {
        newFilterDecision = true
    } else {
        newFilterDecision = false
    }
}

function newFilter(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index])
        if (newFilterDecision === true) {
            emptyNewFilterArray.push(array[index])
        } else {
            continue
        }
    }
    console.log(emptyNewFilterArray)
}

newFilter(newFilterArray, moreThanFifteen)