// Sort and Star
function twoSort(s) {
    return s.sort()[0].split('').join("***");
}

let array = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]
console.log(twoSort(array));