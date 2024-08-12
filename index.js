const { NONAME } = require('dns');

var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
// // var n = prompt('How many more times? ');

// shop = [ 
//   ['каретка', 1200],
//   ['шатун', 1000],
//   ['седло', 300],
//   ['педаль', 100],
//   ['седло', 1500],
//   ['рама', 12000],
//   ['обод', 2000],
//   ['шатун', 200],
//   ['седло', 2700]
// ]

// nameDetail = prompt('Detail name? ');
// console.log(nameDetail);

// summ = 0;
// count = 0;

// for (row of shop) {
//   if (row[0] == nameDetail) {
//     summ += row[1];
//     count ++;
//   }
// }

// console.log('Total price: ', summ, 'and number of products: ', count);

// СЛАЙД 24, ПРАКТИКУМ

// var row = []; // нужно ли создавать пустой массив? 

// for (var i = 0; i <= 100; i++) {
//    row.push(i);
// }
// console.log(row); // и проводить все эти манипуляции?

// number  = prompt('Choose a number of a month: ');

// if (number > 10 && number < 20 || number > 70 && number < 90) {
//   console.log('a good number');
// } else if (number < 10 || number > 90) {
//     console.log('an okay number');
// } else if (number >= 30 && number <= 60) {
//     console.log('a magnificent number');
// } else console.log(number, 'is a great choice');

// как зациклить запрос на выбор числа?

// СЛАЙД 25

// let month  = Math.ceil(Math.random() * 12);
// console.log(month);

// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('Febuary');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;    
// }
// if (month > 12 && month < 1) {
//     console.log('Cant be a month');
// }
// не срабатывает последний if; не удалось сделать promt с вводом пользователя



// arr1 = [2, 1, 0, -1, -2];
// step = -1;
// for (x of arr1) {
//     y = x**3 + 2*x**2 - 4*x + 1;
//     x += step;
//     console.log('At the x point', x, 'the value y is', y);
// }

// var start = prompt('start: ');
// var end = prompt('end: ');
// var step = prompt('step: ');
// start *= 1;
// // end *= 1; - не переводим потому, что x <= end уже сравнивает number с string
// step *= 1;

// for (x = start; x <= end; x += step) {
//     y = Math.pow(x,3) + 2 * Math.pow(x,2) - 4 * x + 1;
//     console.log(`f(x): ${x}`);
// }

// СЛАЙД 26

// for (let n = 0; n < 10; n++) {
//     if (n == 3 || n == 7) {
//         continue;
//     }
//     console.log(n);
// }

// arr = [0, 2, 4, 6, 8, 10]
// console.log(arr);
// for (let i = arr[0]; i < arr.length; i++) {
//     continue;
//     console.log(arr[i]);
// }

// arr2 = [
//   [1, 2, 3],
//   [1, 12, 3],
//   [1, 2, 3],
// ]

// console.log(arr2[arr2.length-1]);
// console.log(arr2[1][1]);
// arr2[1][1] = 100;
// console.log(arr2[1][1]);

// arr2 = [0, 2, 4, 6, 8 ,10]
// for (let q = 0; q < 6; q++) {
//     // if (arr2[q] % 2 == 0) {
//     //     console.log(...arr2);
//     // }
//     console.log(' ',arr2[0]++, ' ', arr2[1]++, ' ',arr2[2]++, ' ',arr2[3]++, ' ',arr2[4]++, ' ',arr2[5]++);
// }
// столбцы получились неровные

// for (col = 0; row <= 5; row++) {
//     col = row;
//     for (i = 0; i < 6; i++) {
//         process.stdout.write(`${col}\t`);
//         col += 2;
//     }
//     console.log();
// }



// for (let x = 0; x < 5; x++) {
//     for (let y of 'abcde') {
//         process.stdout.write(x + y);
//     }
//     console.log();
// }



// let el1 = '⚡';
// let line = '';

// for (let i = 1; i < 10; i++) {
//     line += el1;
//     console.log(line);
// }

// СЛАЙД 27

// user_numb = prompt('Enter a number: ');
// if (user_numb % 5 == 0) {
//     user_summ = prompt('Enter a summ: ');
//     console.log('summ =', user_summ);
// }
// // наверное, задача спрашивает иное



// gibberish = prompt('Enter your text with a couple of *: ');
// console.log(gibberish);
// for (let m of gibberish) {
//     if (m == '*') {
//         console.log('* position is', m);
//     }
// }

str = 'asd*asd';
forMatch = '*';

count = 0;
for (i of str) {
    if (i == forMatch) {
        console.log(`${forMatch} position is ${count}`);
    }
    count++;
}

console.log(str.indexOf(forMatch));



// let N = prompt('Choose a number: ');
// st = '';

// for (let i = 1; i <= 5; i++) {
//     iToStr = i + ''; // iToStr = i.toString() + ' ';
//     nmbRow = iToStr.repeat(i);
//     console.log(nmbRow);
// }



str = 'q22we2r222';
console.log(str.replace('2', 100));
console.log(str.replace(/2/g, 100));
console.log(str.replaceAll('2', 100));
console.log(str.replaceAll('22', 100));



console.log(str[3]);
console.log(str.at(3)); // идём от нуля
console.log(str.at(-3)); //идём от конца

console.log(str.toUpperCase());
console.log(str.includes('we'));

cons = '123, -45, 3, 789, -234, -7, 100';
consSplit = cons.split(', ');
// consSplit *= 1;

consSplitNmb = consSplit.map(i => i * 1); // стрелочная функция; НЕ ЗАБЫВАТЬ ЗАДАВАТЬ ПЕРЕМЕННУЮ!!!
console.log(consSplitNmb);

function abc(x) { // x - это параметр
    return x;
}
q = abc(1000);    // 1000 - это аргумент
console.log(q);

min = consSplitNmb[0];
max = consSplitNmb[0];

for (i of consSplitNmb) {
    if (i > max) {
        max = i;
    }
    if (i < min) {
        min = i;
    }
}
console.log(`min: ${min}`);
console.log(`max: ${max}`);
console.log();

const obj = {
    name: 'Daniil',
    age: 25,
    education: false,
    pass: {
        'password': 11,
        'login': 12,
    },
    data: [1, 2 , {'p': 11}],
}

console.log(obj.age);
console.log(obj['education']);
console.log(obj['pass']['login']);

data = obj['data']; // [] - список/массив
for (i = 0; i < data.length-1; i++) {
    // console.log(data[i]);
    data[i] += 10;
}
console.log(obj['data']);
console.log();

for (key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

const obj2 = {
    key1: {
        key2: {
            key3: {
                key: 100,
            }
        }
    }
}

console.log(obj2);
console.dir(obj2, {depth: 4})
console.log();



input = 'kgdhryfifhgryjhekwlwpdijfyrh'; // str
uniqueObj = {};

console.log('age' in obj);
for (chr of input) {
    if (chr in uniqueObj) {
        uniqueObj[chr] += 1;
    } else {
        uniqueObj[chr] = 1;
    }
}

console.log(uniqueObj);
// далее выводим только уникальные символы (с счётчиком 1)
