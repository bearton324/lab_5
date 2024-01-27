function getMinMaxEvenOdd(arr) {
    let minEven = Infinity;
    let maxEven = -Infinity;
    let minOdd = Infinity;
    let maxOdd = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            if (arr[i] < minEven) {
                minEven = arr[i];
            }
            if (arr[i] > maxEven) {
                maxEven = arr[i];
            }
        } else {
            if (arr[i] < minOdd) {
                minOdd = arr[i];
            }
            if (arr[i] > maxOdd) {
                maxOdd = arr[i];
            }
        }
    }
    return {
        minEven,
        maxEven,
        minOdd,
        maxOdd
    };
}

function selectionSortDescending(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}

let len;
let arr;
len = +prompt("Введіть довжину масива: ");
arr = new Array(+len);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * 100)
}
let arrMinMaxEvenOdd = getMinMaxEvenOdd(arr);
alert(`Маємо масив: ${arr} \n 
    Найменший елемент з парним індексом: ${arrMinMaxEvenOdd.minEven} \n 
    Найбільший елемент з парним індексом: ${arrMinMaxEvenOdd.maxEven} \n 
    Найменший елемент з непарним індексом: ${arrMinMaxEvenOdd.minOdd} \n 
    Найбільший елемент з непарним індексом: ${arrMinMaxEvenOdd.maxOdd}`
);
alert(`Вхідний масив: ${arr}. \n
    Відсортований масив: ${selectionSortDescending(arr)}.`);