let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');


const N = Number(input[0]);
const Deque = [];
const result = [];

function push(n) {
    let integral = n.split(' ');

    if (n.indexOf('front') != -1) {
        return Deque.unshift(integral[1]);
    } else {
        return Deque.push(integral[1]);
    }
}

function pop(n) {
    if (Deque.length == 0) {
        return result.push(-1);
    } else if (n.indexOf('front') != -1) {
        return result.push(Deque.shift());
    } else {
        return result.push(Deque.pop());
    }
}

function size() {
    return result.push(Deque.length);
}

function empty() {
    return Deque.length != 0 ? result.push(0) : result.push(1);
}

function print(n) {
    if (Deque.length == 0) {
        return result.push(-1);
    } else if (n.indexOf('front') != -1) {
        return result.push(Deque[0])
    } else {
        return result.push(Deque[Deque.length-1]);
    }
}

for(i = 1; i <= N; i++) {
    if (input[i].indexOf('push') != -1) {
        push(input[i]);
    } else if (input[i].indexOf('pop') != -1) {
        pop(input[i]);
    } else if (input[i] === 'size') {
        size();
    } else if (input[i] === 'empty') {
        empty();
    } else if (input[i] === 'front' || input[i] === 'back') {
        print(input[i]);
    }
}
console.log(result.join('\n'));

Deque라는 자료구조는 처음 봤는데 그것에 대한 기초적인 문제였다.
다만 front와 back에 대한 기능을 어떻게 구현할까 하다가 기능자체로 함수를 만든 뒤에
front와 back의 포함여부에 따라 앞에 작동할지 뒤에 작동할지를 결정하게 나누어 구현하였다!
