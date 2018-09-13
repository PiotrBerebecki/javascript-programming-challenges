console.clear();

const findUniq = arr => {
    let first = [arr[0]];
    let second = [];

    for (let i = 1; second.length >= 0 && second.length < 2; i++) {
        if (arr[i] === first[0]) {
            first.push(arr[i]);
        } else {
            second.push(arr[i]);
        }
    }

    return first.length > 1 ? second[0] : first[0];
};

console.log(findUniq([ 2, 2, 2, 2, 2, 2, 3 ]));
