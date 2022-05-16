/*
    Jack Doyle | Accounts IQ Fullstack Internship coding exercise

    A buyer wants to maximise the cost of thier purchase given their own budget
    He needs to buy 2 items, and he's presented with the list of available prices for each.
    Your task is to write a function that will take in both integer lists of prices and 
    return the max amount of money that can be spent purchasing BOTH items.
    If the buyer cannot purchase both items, the function should return -1


    Constraints:

    - each list will not contain more than 100 items/
    - each item price 0 > n <= 10^4
    - budget strictly greater than 0
*/



let listOne = [1, 2, 3, 9]

let listTwo = [3, 5, 6, 8, 4]

let listThree = [9, 12, 44, 76, 21, 90, 67, -110, 445, 23, 532]

let listFour = [250, 1000, -777, 111, 205, 345, 694]

let budget1 = 6
let budget2 = 19
let budget3 = 3
let budget4 = 2300
let budget5 = 603
let budget6 = 1337


function getMaximumSpend(listOne, listTwo, budget) {

    let maxSpend = 0

    
    /*
        Nested for loop that traverses both arrays
        compares sum of the current item in both arrays to the budget and the maxSpend
        if this sum is <= to budget and >= maxSpend it sets this as the new max spend.

        The nested for loop will test the sum of every possible combination of elemenents from 
        both arrays this is good because it is thorough but has a complexity of O(N^2) this could
        be bad at scale but with the constraint of neither list being over a length of 100 this will be 
        fine.

        else if maxSpeed == 0 the budget is not big enough to buy any items and returns -1
    */
    for(let i=0; i <= listOne.length; i++) {
        for(let j=0; j <= listTwo.length; j++) {
            
            if (listOne[i] + listTwo[j] <= budget && listOne[i] + listTwo[j] >= maxSpend ) {
                
                maxSpend = listOne[i] + listTwo[j]
               // console.log(maxSpend)
            } else if (maxSpend == 0 ) {
                maxSpend = -1
            }
        }
    }

    return maxSpend

}

// Sample outputs with different lists and budgets

// Expected result = 6
console.log(getMaximumSpend(listOne, listTwo, budget1))

// Expected result = 17
console.log(getMaximumSpend(listOne, listTwo, budget2))

// Expected result = -1 
console.log(getMaximumSpend(listOne, listTwo, budget3))

// Expected result = 1532 (532, + 1000)
console.log(getMaximumSpend(listThree, listFour, budget4))

// Expected result = 584 (-110 + 694)
console.log(getMaximumSpend(listThree, listFour, budget5))

// Expected result = 1532,  (532 + 694)
console.log(getMaximumSpend(listThree, listFour, budget6))

/*
    Optional Extras


    What is the prices of the items could be negative?: The original solution works with negative prices for items.

    Attempt:

    How would you change your function if the number of lists was not fixed?

    Triple nested for loop feels like the wrong answer for complexity but also if there
    are three lists or more comparing elements from the 1st list and the 3rd would be a difficult task

*/

let list = [listOne, listTwo, listThree]

/* 
    getMaximumSpendLists([][], int)

    takes an array of arrays of item prices and gets the max spend but only from consecutive lists
    cannot take items from lists that skip a list index e.g 1 item from list 1 and an item from list 3 skipping list 2
*/

function getMaximumSpendLists(listOfArrays, budget) {

    let maxSpend = 0

    for(let i=0; i <= listOfArrays.length; i ++) {
        let temp = i + 1
                if (temp >= listOfArrays.length) {
                    temp = 1
                }
        for(let j = 0; j <= listOfArrays[temp].length; j++) {
            for(let k =0; k <= listOfArrays[temp].length; k++) {



                 if (listOfArrays[temp-1][j] + listOfArrays[temp][k] <= budget && listOfArrays[temp-1][j] + listOfArrays[temp][k] >= maxSpend) {

                    maxSpend = listOfArrays[temp-1][j] + listOfArrays[temp][k]


                   // console.log(maxSpend)
                } else if (maxSpend == 0 ) {
                    maxSpend = -1
                }

            }
        }
    }

    return maxSpend
}

console.log(getMaximumSpendLists(list, budget2))

console.log(getMaximumSpendLists(list, budget3))

console.log(getMaximumSpendLists(list, budget4))