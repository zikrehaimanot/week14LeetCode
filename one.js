// Given an integer number n, return the difference between the product of its digits and the sum of its digits.




var subtractProductAndSum = function(n) {
    let sum = 0
    let prod = 1
    let toString = n.toString()
    let splitString = toString.split('')
    for(let i = 0; i < splitString.length; i++){
     let parsedNum =  parseInt(splitString[i])
        sum += parsedNum
        prod *= parsedNum
    }

    return prod - sum
};
