
// // Example usage:
const N = 984;
const K = 1964;
const times =  [
    502954520, 810094714,  72809368,  9063869, 206357649, 310539208,
    395888713, 883505278, 511675860, 873047754, 887558672, 907797159,
    972693791, 895542968, 999375616, 813787503, 249516818, 533542795,
    927665710, 807746921, 320868034, 799141721, 332918727,  13126905,
    738645001, 231019230, 968790460, 511286923, 108221662, 325776390,
    358290987, 925155708, 523468421, 113557212,  37851818, 993415743,
    970706518, 385927383,  40894101, 150977080,  50013416, 956545530
]

;

// -------------- My own (Correct) ------------------------



function canCrossBridge(N, K, times) {
    times.sort((a, b) => a - b);

    let totalTime = 0;

    for (let i = 0 ; i < times.length - 2 ;i++) {
        totalTime += times[0] + times[0]
    }
        totalTime += times[0] 
    return totalTime <= K;
}


const result = canCrossBridge(N, K, times);
console.log(result ? "YES" : "NO");

// -------------- Chat GPT ------------------------

// function canCrossBridge(N, K, times) {
//     // Sort the crossing times in ascending order
//     times.sort((a, b) => a - b);

//     let totalTime = 0;

//     // Iterate until only two people are left
//     while (N > 3) {
//         // Option 1: Two fastest cross, fastest returns, two slowest cross, second fastest returns
//         let option1 = times[1] + times[0] + times[N - 1] + times[1];

//         // Option 2: Two slowest cross, fastest returns, two fastest cross, fastest returns
//         let option2 = times[N - 1] + times[N - 2] + 2 * times[0];

//         // Add the minimum of the two options to the total time
//         totalTime += Math.min(option1, option2);

//         // Reduce N by 2, as 2 people have crossed
//         N -= 2;
//     }

//     // Handle the last 3 or 2 people
//     if (N === 3) {
//         totalTime += times[2] + times[1] + times[0];
//     } else if (N === 2) {
//         totalTime += times[1];
//     } else {
//         totalTime += times[0];
//     }

//     // Return whether the total time is within the allowed time
//     return totalTime <= K;
// }


// const result = canCrossBridge(N, K, times);
// console.log(result ? "YES" : "NO"); // Expected output: YES


// -------------- Claude AI ------------------------



// function canCrossBridge(N, K, times) {
//     times.sort((a, b) => a - b);
    
//     const dp = new Array(N + 1).fill(Infinity);
//     dp[0] = 0;
//     dp[1] = times[0];
    
//     for (let i = 2; i <= N; i++) {
//         dp[i] = Math.min(dp[i], dp[i-1] + times[0] + times[i-1]);
        
//         if (i >= 3) {
//             dp[i] = Math.min(dp[i], dp[i-2] + times[0] + times[1] + times[i-1] + times[1]);
//         }
        
//         for (let j = 0; j < i - 1; j++) {
//             dp[i] = Math.min(dp[i], dp[j] + times[i-1] + (j > 0 ? times[0] : 0));
//         }
//     }
    
//     return dp[N] <= K;
// }

// function solveBridgeCrossing(input) {
//     const lines = input.trim().split('\n');
//     let lineIndex = 0;
    
//     const T = parseInt(lines[lineIndex++]);
//     const results = [];
    
//     for (let t = 0; t < T; t++) {
//         const [N, K] = lines[lineIndex++].split(' ').map(Number);
//         const times = [];
//         for (let i = 0; i < N; i++) {
//             times.push(parseInt(lines[lineIndex++]));
//         }
        
//         const result = canCrossBridge(N, K, times);
//         results.push(result ? "YES" : "NO");
//     }
    
//     return results.join('\n');
// }

// // Test cases
// const testInput = `
// 4 17
// 1
// 2
// 5
// 10
// 4 4
// 1
// 2
// 5
// 10
// 2 22
// 22
// 22
// 3 1000000000
// 1000000000
// 1000000000
// 1000000000
// 1 10
// 12
// 1 100
// 12
// 1 10
// 10
// 1 10
// 9
// 1 10
// 11
// 2 10
// 10
// 5
// 2 10
// 10
// 15
// 5 100
// 15
// 14
// 20
// 28
// 16
// 5 100
// 16
// 15
// 20
// 28
// 17
// 5 987654321
// 345678912
// 456789123
// 567891234
// 678912345
// 789123456`;

// console.log(solveBridgeCrossing(testInput));






// const result = canCrossBridge(N, K, times);
// console.log(result ? "Yes" : "No");


console.log("new code")



// ----------- code for testing all testcases --------------

// function canCrossBridge(N, K, times) {
//     times.sort((a, b) => a - b);

//     let totalTime = 0;

//     for (let i = 0; i < times.length - 2; i++) {
//         totalTime += times[0] + times[0];
//     }
//     totalTime += times[0];
//     return totalTime <= K;
// }

// function processTestCases(testCases) {
//     let output = "";

//     testCases.forEach((testCase, index) => {
//         const N = testCase.N;
//         const K = testCase.K;
//         const times = testCase.times;

//         const result = canCrossBridge(N, K, times);
//         output += `Case #${index + 1}: ${result ? "YES" : "NO"}\n`;
//     });

//     return output.trim();
// }

// // Input data
// const inputData = `
// 14
// 4 17
// 1
// 2
// 5
// 10
// 4 4
// 1
// 2
// 5
// 10
// 2 22
// 22
// 22
// 3 1000000000
// 1000000000
// 1000000000
// 1000000000
// 1 10
// 12
// 1 100
// 12
// 1 10
// 10
// 1 10
// 9
// 1 10
// 11
// 2 10
// 10
// 5
// 2 10
// 10
// 15
// 5 100
// 15
// 14
// 20
// 28
// 16
// 5 100
// 16
// 15
// 20
// 28
// 17
// 5 987654321
// 345678912
// 456789123
// 567891234
// 678912345
// 789123456
// `;

// function parseInput(input) {
//     const lines = input.trim().split("\n");
//     const testCases = [];
//     let index = 1;

//     const numberOfCases = parseInt(lines[0], 10);

//     for (let i = 0; i < numberOfCases; i++) {
//         const [N, K] = lines[index].split(" ").map(Number);
//         index++;
//         const times = [];

//         for (let j = 0; j < N; j++) {
//             times.push(Number(lines[index]));
//             index++;
//         }

//         testCases.push({ N, K, times });
//     }

//     return testCases;
// }

// const testCases = parseInput(inputData);
// const output = processTestCases(testCases);
// console.log(output);
