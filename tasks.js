/*
1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. 
Цикл можно использовать любой

for(let i = 5; i <= 10; i++) {
	console.log(i);
}
*/

/*
2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
Когда цикл дойдет до числа 13 - остановить весь цикл

for(let i = 20; i >= 10; i--) {
	if(i === 13) break;
	console.log(i);
}
*/

/*
3) При помощи цикла for выведите чётные числа от 2 до 10 включительно

for(let i = 2; i <= 10; i++) {
	if(i % 2 === 0) console.log(i);
}
*/

/*
 4) Цикл, который нужно переписать:
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }

 let i = 2;
while(i <= 16) {
	if(i % 2 === 0) {
		i++;
		continue;
	} else {
		console.log(i);
	}
	i++;
}
*/

/*
5) Заполните массив цифрами от 5 до 10 включительно. 
Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arr = [];
for(let i = 5; i <= 10; i++){
	arr.push(i);
}
console.log(arr);
*/

/*
6) Заполните новый массив (result) числами из старого (arr). 
Количество элементов в массиве можно получить как arr.length, 
а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for(let i = 0; i <= arr.length - 1; i++) {
	result.push(arr[i]);
}
*/

/*
7) Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for(let i = 0; i <= data.length - 1; i++) {
	if(typeof data[i] === 'number'){
		data[i] *= 2;
	} else {
		data[i] += ' — done';
	}

	result.push(data[i]);
};
console.log(result);
*/

/*
8) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for(let i = 1; i <= data.length -1; i++) {
	result [i - 1] = data[data.length - i];
}
console.log(result);
*/

/*
Задача на построение фигуры:

const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += ' ';
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += '*';
	}
	result += '\n';
}
console.log(result);
*/

/*
9) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и 
возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(number) {
	const array = [number - 1, number, number + 1];
	return array;
}

const res = returnNeighboringNumbers(5);
console.log(res);
*/

/*
10) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. 
(Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20
Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
проверять их и продумывать логику работы внутри. 
Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. 
Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 
Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

function getMathResult(num, times) {
	if(typeof (times) !== 'number' || times  <= 0) {
		return num;
	}

	let str = '';

	for(let i = 0; i <= times; i++) {
		if(i === times) {
			str += `${num * i}`;
		} else {
			str += `${num * i}---`;
		}
	}

	return str;
}

const res = getMathResult(3, 5);
console.log(res);
*/

/* 
11) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
(тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. 
Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - 
вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. 
Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
Примеры:
calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

формула объема куба — V = a**3; a - ребро куба
формула площади поверхности куба — S = 6 * H**2; H**2 - площадь одной грани у куба, а всего граней у куба 6.

function calculateVolumeAndArea(cubeEdge) {
	const v = cubeEdge * cubeEdge * cubeEdge;
	const s = 6 * (v * v) ;

	if(typeof cubeEdge != 'number' || cubeEdge <= 0) {
		return 'При вычислении произошла ошибка';
	} else {
		return `Объем куба: ${Math.round(v)}, площадь всей поверхности: ${Math.round(s)}`;
	}
}

calculateVolumeAndArea(5);
*/

/*
12) Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:
getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует"
getCoupeNumber(0)  => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

function getCoupeNumber(seatNumber) {
	if(seatNumber > 36 || seatNumber == 0) {
		return 'Таких мест в вагоне не существует';
	} else if(typeof seatNumber != 'number' || seatNumber <= 0 || !Math.trunc(seatNumber)) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else {
		return Math.ceil(seatNumber / 4);
	}
}

const result = getCoupeNumber(-1);
console.log(result);
*/
