// // 버블 정렬

const arr = [1, 4, 38, 68, 34, 2, 23, 45];
let swap = 0;
// 기존 배열을 복사
const newArr = [...arr];

for(let i = 0; i < arr.length-1; i++) {
    console.log(newArr);
    for(let j = 0; j < arr.length-1; j++) {
        if(newArr[j] > newArr[j+1]) {
            swap = newArr[j];
            newArr[j] = newArr[j+1];
            newArr[j+1] = swap;
        }
    }
    if(newArr == arr) {
        break;
    }
}

// // 선택 정렬
// // 삽입 정렬
