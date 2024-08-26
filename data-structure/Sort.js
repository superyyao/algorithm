const array = [22, 323, 423, 3, 21, 445, 534, 5332, 5678, 234, 34, 33, 89, 99, 566]


// Array 自带排序
// 从小到大排序
// console.log(array.sort((a,b) => a-b))

// 从大到小排序
// console.log(array.sort((a,b) => b-a))


// 1. 冒泡排序
function quickSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0, len = arr.length - 1; i < len - j; i++) {
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
    }
    return arr
}

// console.log("冒泡排序：", quickSort(array))


// 2. 快速排序， 通过标志位，二分递归实现
// O(n * lgn)
function quickSort1(arr) {
    if (arr.length < 2) {
        return arr
    }
    const flag = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < flag) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort1(left).concat(flag, quickSort1(right))
}

console.log("快速排序：", quickSort1(array))
