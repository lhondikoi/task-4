// Question 1a

(function () {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let output = arr.filter((num) => {
        if (num % 2 != 0) {
            return num
        }
    })
    console.log(output.join(" "))
})();

// Question 1b
(function () {
    let names = ['john', 'bob', 'harry']
    let capitalizedNames = names.map(name=>{
        return name[0].toUpperCase() + name.slice(1)
    })
    console.log(capitalizedNames)
})();

// Question 1c

(function () {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let output = arr.reduce((sum, value) => {
        return sum + value
    }, 0)
    console.log(output)
})();

// Question 1d
function isPrime(num) {
    if (num < 2) {
        return false
    } else if (num === 2) {
        return true
    } else {
        for (let i=2; i<Math.floor(Math.sqrt(num))+1; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}

(function () {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let output = arr.filter((num) => {
        return isPrime(num);
    })
    console.log(output)
})();

// Question 1e
function isPalindrome(word) {
    for (let i=0; i<Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - i - 1]) {
            console.log(word[i], word[word.length - i - 1])
            return false
        }
    }
    return true
}

(function (){
    let words = ['abba', 'abcba', 'abaaba', 'abcab', 'cabac']
    let palindromes = words.filter((word) => {
        return isPalindrome(word)
    })
    console.log(palindromes.join(" "))
})();

// Question 1f

// Question 1g
(function (){
    let arr = [1, 2, 1, 3, 7, 7, 5, 9, 0]
    let output = []
    for (let i=0; i<arr.length; i++) {
        let flag = false
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] == arr[j]) {
                flag = true
                break
            }
        }
        if (!flag) {
            output.push(arr[i])
        }
    }
    console.log(output.join(" "))
})();

// Question 1g
(function (){
    let k = 5
    let arr = [1, 2, 3, 4, 5, 6, 7]
    while (k > 0) {
        let num = arr.pop()
        arr.unshift(num)
        k--
    }
    console.log(arr.join(" "))
})();

// Question 2a
let oddFilter = (arr) => {
    return arr.filter((num)=>num % 2 !== 0)
}
console.log(oddFilter([1,2,3,4,5,6,7]));

// Questoin 2b
let titleCaps = (arr) =>  {
    return arr.map(name=>{
        return name[0].toUpperCase() + name.slice(1)
    })
}
console.log(titleCaps(['john', 'bob', 'harry']))

// Question 2c
let arrSum = (arr) => {
    return  arr.reduce((sum, value) => {
        return sum + value
    }, 0)
}
console.log(arrSum([1,2,3,4,5,6,7,8,9,10]))

// Question 2d
let primeFilter = (arr) => {
    return arr.filter((num) => {
        return isPrime(num);
    })
};
console.log(primeFilter([1,2,3,4,5,6,7,8,9,10]))

// Question 1e
let palindromeFilter = () => {
    return words.filter((word) => {
        return isPalindrome(word)
    })
};
console.log(['abba', 'abcba', 'abaaba', 'abcab', 'cabac'])