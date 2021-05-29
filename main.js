/*
    TASK 1

    Вывести в консоль с помощью цикла  WHILE, все нечетные числа от 30 до 40

*/
let a = 30;

while (a < 40) {
    a++;   
    if (a % 2 == 0) continue;
    console.log(a);
    
}

/*
    TASK 2

    Вывести в консоль с помощью цикла FOR, все четные числа от 70 до 40.
    Первым четным числом должно быть 70. 
    
*/

for (let i = 70; i > 40; i--) {
    if (i % 2 != 0) continue;
    console.log(i)
}

/*
    TASK 3

    Переведите цикл FOR из задания 2, в цикл WHILE.  
    
*/
let x = 70;
while (x > 40) {
    x--;
    if (x % 2 != 0) continue;
    console.log(x)
}

/*
    TASK 4

    С помощью любого известного Вам цикла из JavaScript, 
    найдите сумму чисел от 1 до 100, и выведите результат в консоль.   
    
*/
let sum = 0;
for (let i = 0; i < 100; i++) {
    sum += i;
}
console.log(sum);

/*
    TASK 5

    Вывести 10 строчек со смайликом : ':)'. 
    На первой строчке один смайлик, на второй два,и так далее. 
    На последней должно быть 10 смайликов.   
    
*/

let oneSmile = ':)';
let smiles = '';
for(let i = 0; i < 10; i++) {
    smiles += oneSmile
    console.log(smiles)
}

/*
    TASK 6

    Напишите программу, которая выводит на экран числа от 1 до 50. 
    При этом вместо чисел, кратных трем, программа должна выводить слово «Java»,
    а вместо чисел, кратных пяти — слово «Script». 
    Если число кратно и 3, и 5, то программа должна выводить слово «JavaScript»   
    
*/

for (let i = 0; i < 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('JavaScript')
    }
    else if (i % 3 == 0) {
        console.log('Java')
    } 
    else if(i % 5 == 0) {
        console.log('Script')
    } 
    else {
        console.log(i)
    }
    
}

/* 
    TASK 7
    У нас есть число 1000
    Делите его на 2 столько раз, пока результат деления не станет меньше 50.
    Посчитайте количество итераций необходимых для выхода из цикла 
    и выведите результат в консоль

*/

let num = 1000,
    result = num / 2,
    attempt = 1;
console.log(result)
 while (result > 50) {
    result = result / 2;
     attempt++;
 }
 console.log(attempt)

/*
    TASK 8
    Напишите программу, которая используя цикл while 
    выведет все числа от 45 до 170, кратные 10.

*/

let y = 45;
while (y < 170) {
    y++;
    if (y % 10 == 0) {
        console.log(y)
    }
}




