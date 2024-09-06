// 선형 탐색(Linaer Search)
const comparator = ['a', 'b', 'c', 'd', 'e'];
const foundIndex = [];

comparator.forEach((element, idx) => {
    if(element === 'b') {
        foundIndex.push(idx);
    }
})
console.log(foundIndex); // 1 출력

// 초기 배열 & 찾고자 하는 값
const arr = [1, 4, 38, 68, 34, 2, 23, 45];
const answer = 45;

// 시작점, 끝점, 중간점
let start = 0;
let end = 0;
let mid = Math.floor((start+end) / 2);

// 1. 정렬된 상태를 해 준다
arr = arr.sort((a, b) => a - b);
// [
//     1,  2,  4, 23,
//     34, 38, 45, 68
//   ]

// arr의 중간값이 우리가 찾는 값이 아니며
// 시작점이 끝점보다 작을 경우 반복
while(arr[mid] !== answer && start <= end) {
    // 값이 중간값보다 작을 경우
    if(arr[mid] < answer) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
    mid = Math.floor((start+end)/2);
    return -1;
}

