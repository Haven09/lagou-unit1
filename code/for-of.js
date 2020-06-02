var arr = [12, 34, 32, 89, 4]

let min = arr[0]

for (const item of arr) {
    if(item < min) min = item
}

console.log(min);
