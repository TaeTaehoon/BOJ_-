let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');


const N = Number(input[0]);
const queue = [];
const result = [];

function push(n) {
    let num = n.split(' ');
    queue.push(num[1]);
}

function front() {
    result.push(queue.length == 0 ? -1 : queue[0]);
}

function back() {
    result.push(queue.length == 0 ? -1 : queue[queue.length-1]);
}

function size() {
    result.push(queue.length);
}

function empty() {
    result.push(queue.length == 0 ? 1 : 0);
}

function pop() {
    result.push(queue.length == 0 ? -1 : queue.shift());
}

for (i = 1; i <= N; i++) {
    if (input[i].length == 3) {
        pop();
    } else if (input[i].length == 4) {
        if (input[i] === 'size') {
            size();
        } else {
            back();
        }
    } else if (input[i].length == 5) {
        if (input[i] === 'front') {
            front();
        } else {
            empty();
        }
    } else {
        push(input[i]);
    }
}

console.log(result.join('\n'));

stack문제와 똑같은 유형이었으나 요구하는 자료구조가 stack => queue로 변경된 것 뿐이다.
