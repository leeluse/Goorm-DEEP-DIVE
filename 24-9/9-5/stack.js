
// 스택의 생성자 함수
class Stack {
    // 아이템을 담은 배열 생성
    constructor() {
        this.items = [];
    }
    push(item) {
        return this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}


const stk = new Stack();

// stack에 삽입하기
stk.push('welcome');
stk.push('to');
stk.push('9oorm');
stk.push('FE');
console.log(stk);

const arr = []

while(!stk.isEmpty()) {
    arr.push(stk.pop());
}
console.log(arr);
