function swapOdd(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        if (i % 2 !== 0 && j % 2 !== 0) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        } else if (i % 2 === 0 && j % 2 !== 0) {
            i++;
        } else if (j % 2 === 0 && i % 2 !== 0) {
            j--;
        } else if (i % 2 === 0 && j % 2 === 0) {
            i++;
            j--;
        }
    }

    return arr;
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(swapOdd(arr))

// function add(value1) {
//     let value = 5
//     function add(value2) {
//         console.log(value)
//     }
// }

// add(4)(2)


// let value = 0
// function calculate(value) {
//     return value
// }

// function add(value2) {
//     this.calculate() + value2
// }

// function ultiply(value3) {
//     this.add() * value3
// }

// function val() {
//     const data = this.multiply()
//     console.log(data)
// }


// console.log(calculate(10).add(5).multiply(2).val()) //30


//     (function () {
//         setTimeout(() => console.log(1), 2000);
//         console.log(2);
//         setTimeout(() => console.log(3), 0);
//         console.log(4);
//     })();

function fun() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(console.log(1)), 2000);
    })
}

function fun2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(console.log(3)), 0);
    })
}

async function givemeoutput() {
    await fun()
    console.log(2);
    await fun2()
    console.log(4);
}

console.log(givemeoutput())




