//Задача 1
//У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения в массиве (массив нужно передать аргументом) 
//и вывода результата в консоль. Вызовите функцию для демонстрации результата
 
function doublingArray(userArray){
for(let i=0; i < userArray.length; i++) {
    let doubling = userArray[i] * 2;  
    console.log(`Удвоения ${userArray[i]} = ${doubling}`);
}
  return userArray; 
}
console.log (doublingArray([2, 4, 6, 8, 10]));

//Задача 2
//Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. 
//Для отображения результа работы функции, вызовите её три раза с различными параметрами, результат каждого вызова присвойте отдельной переменной 
//и выведите переменные в консоль

function userSubstring(userString = "Test", n = 2) {
    let subStr = userString.substring(0,n);
    return subStr;
}
let Example1 = userSubstring ("Massiv", 2);
let Example2 = userSubstring ("Example", 4);
let Example3 = userSubstring ("Hello World!", 7);

console.log (`Test1 = ${Example1}`);
console.log (`Test2 = ${Example2}`);
console.log (`Test3 = ${Example3}`);

//Задача 3*
//У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения элементов массива (массив нужно передать аргументом) 
//и вывода результата в консоль. Вызовите функцию для демонстрации результата

function averageArray(userArray1){
let sum = 0;
for(let index of userArray1){
    sum += index; 
}
let average = sum / userArray1.length;
return `Среднее значения элементов массива = ${average}`;
}

console.log(averageArray([10, 15, 20, 25, 30]));
