
// let num = 5


// const program = (num) => {
//     const isPrime = (num) => {
//         if (num <= 1) {
//             return false;
//         }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     let res = []
//     for (let i = 1; i < num - 1; i++) {
//         if (isPrime(i)) {
//             res.push(i)
//         }
//     }
//     return res
// }

// let arr = [5, 8, 1, 6, 7, 5488136, 5928447, 10000000];

// for (let i = 0; i < arr.length; i++) {
//     let result = program(arr[i])
//     console.log(`Case #${i + 1}: ${result}`);
// }

// const sumFun = (n , curr) => {
//     let totalSum = n.reduce((sum, value) => sum + value, 0);
//     let sumWithoutCurrent = totalSum - curr
//     return sumWithoutCurrent
// }

// const check = (arr ,n) => {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = sumFun(arr, arr[i])
//         if (!arr.includes(n - sum)) {
//             let index = arr.indexOf(arr[i]);
//             if (index > -1) {
//                 arr.splice(index, 1); // Removes the element at the found index
//             }
//         }
//     }
//     if (arr.length <= 1){
//         return 0
//     }
//     else{
//         return arr.length
//     }
// }



const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const findNSubtractorizations = (N) => {
    let primes = [];
    let subtractorizations = new Set();

    // Step 1: Generate all primes up to N
    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    // Step 2: Check for subtractorizations
    for (let i = 0; i < primes.length; i++) {
        for (let j = 0; j < primes.length; j++) {
            let diff = primes[i] - primes[j];
            if (diff > 1 && isPrime(diff)) {
                subtractorizations.add(diff);
            }
        }
    }

    return subtractorizations.size;
};

// Example usage
let arr = [5, 8, 1, 6, 7, 5488136, 5928447, 10000000];

for (let i = 0; i < arr.length; i++) {
    let result = findNSubtractorizations(arr[i]);
    console.log(`Case #${i + 1}: ${result}`);
}




