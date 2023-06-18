//Count and say the sequence.

function countAndSay(n) {
    if (n <= 0) {
        return '';
    }

    let result = '1';

    for (let i = 1; i < n; i++) {
        let count = 1;
        let say = '';

        for (let j = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++;
            } else {
                say += count.toString() + result[j];
                count = 1;
            }
        }

        result = say;
    }

    return result;
}

// Example usage
const n = 5;
const sequence = countAndSay(n);
console.log(sequence); // Output: "111221"
