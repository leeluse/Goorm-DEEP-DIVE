// 큐
class Queue {
    // 아이템을 담은 배열 생성
    constructor() {
        this.items = [];
    }
    push(item) {
        return this.items.push(item);
    }
    pop() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// 큐를 초기화
const queue = new Queue();


// queue에 삽입하기
queue.push('welcome');
queue.push('to');
queue.push('9oorm');
queue.push('FE');
console.log(queue);

const arr = []

while(!queue.isEmpty()) {
    arr.push(queue.pop());
}
console.log(arr);