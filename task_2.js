// const numberVariable = 21;
// const stringVariable = '21';
// const boolVariable = true;
// const objectVariable = {};

// const a = String(numberVariable);

// const a = Number(stringVariable);

// const a = numberVariable + Number(stringVariable);

// const a = Boolean(numberVariable);

// const a = !!numberVariable;

// console.log(a);
// console.log(typeof a);

// const a = (number) => {
//   if (number % 2) {
//       console.log('чётное');
//
//     } else {
//       console.log('нечетное');
//
//     }
// };

// a(3);
// a(4);

// const a = (number) => {
//     if (!(number % 2)) {
//         console.log(number *2);
//
//     } else {
//         console.log(number *3);
//
//     }
// };
//
// a(3);

// const a = (number) => {
//     console.log(!(number % 2) ? number *2 : number *3);
// }
//
// a(2);

const user = (numb1, numb2) => {
    if (numb1 % 2 === 0 && numb2 % 2 === 0) {
        return numb1 + numb2;
    } else if (numb1 % 2 === 0 || numb2 % 2 === 0) {
        return Math.abs(numb1 - numb2);
    } else {
        return numb1 * numb2;
    }
}

// console.log (user (3, 3 ));
//
const tuti = (number) => {
    if (number % 2 === 0) {
        console.log(number, 'чётное');
    } else {
        console.log(number, 'нечётное');
    }
}

// a(2);

function greeb1(num1, num2) {
    let smaller;
    if (num1 > num2) {
        smaller = num2;
    } else {
        smaller = num1;
    }
    for (let i = 1; i < smaller; i++) {
        console.log(i);
    }
}

// greeb(5, 3)

function greeb2(num1, num2) {
    let bigger;
    if (num1 < num2) {
        bigger = num2;
    } else {
        bigger = num1;
    }
    for (let i = 1; i < bigger; i++) {
        if (i % 2 === 0)
            console.log(i);
    }
}

// greeb2(4, 10);

const greb3 = (N, M) => {
    for (let i = 1; i < N; i++) {
        let result = i * M;
        if (result % 2 !== 0) {
            console.log(i + "/" + result)
        }
    }
}

// greb3(12, 9)

// Задачи после прочтения Learn;

let admin, name;

name = "Джон";

admin = name;

alert(admin);
//
5 > 4 - true
"ананас" > "яблоко" - false
"2" > "12" - true
undefined == null - true
undefined === null - false
null == "\n0\n" - false
null === +"\n0\n" - false
//
Покажите
знак
числа.let
value = prompt('Ввести число', 1);

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}
//
Переписать
IF
в?.let
message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}
Решение:
    let message = (login == 'Сотрудник') ? 'Привет' :
        (login == 'Директор') ? 'Здравствуйте' :
            (login == '') ? 'Нет логина' :
                '';
//
Проверка
логина :
    let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName === '' || userName == null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}
//
Какое
последнее
значение
выведет
этот
код ? Почему ?

    let i = 3;

while (i) {
    alert(i--);
}
Решение:
    let i = 3;

while (i) {
    alert(i--);
}
ответ
будет: 1;
//
Какие
значения
выведет
цикл
while?
    важность : 4
    Для
каждого
цикла
запишите, какие
значения
он
выведет.Потом
сравните
с
ответом.Оба
цикла
выводят
alert
с
одинаковыми
значениями
или
нет ?

    Префиксный вариант++
i:

    let i = 0;
while (++i < 5) alert(i);
Постфиксный
вариант
i++

let i = 0;
while (i++ < 5) alert(i);
Решение:
    let i = 0;
while (++i < 5) alert(i);
-от
1 - до
4;

let i = 0;
while (i++ < 5) alert(i);
-от
1
до
5;

Какие
значения
выведет
цикл
for?
       важность : 4
    Для
каждого
цикла
запишите, какие
значения
он
выведет.Потом
сравните
с
ответом.Оба
цикла
выведут
alert
с
одинаковыми
значениями
или
нет ?

    Постфиксная форма
:

for (let i = 0; i < 5; i++) alert(i);
Префиксная
форма:

    for (let i = 0; i < 5; ++i) alert(i);
Решение:
    for (let i = 0; i < 5; ++i) alert(i);

for (let i = 0; i < 5; i++) alert(i);
От
нуля
до
4
и
там
и
там;
//
Замените
for на while
    важность:
5
Перепишите
код, заменив
цикл
for на while,
без
изменения
поведения
цикла.for(let
i = 0;
i < 3;
i++
)
{
    alert(`number ${i}!`);
}
Решение:
    let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}
//
Повторять
цикл, пока
ввод
неверен
важность: 5
Напишите
цикл, который
предлагает
prompt
ввести
число, большее
100.
Если
посетитель
ввёл
другое
число – попросить
ввести
ещё
раз, и
так
далее.Цикл
должен
спрашивать
число
пока
либо
посетитель
не
введёт
число, большее
100, либо
не
нажмёт
кнопку
Отмена(ESC).Предполагается, что
посетитель
вводит
только
числа.Предусматривать
обработку
нечисловых
строк
в
этой
задаче
необязательно.Решение
:
let number;

do {
    number = prompt("Введите число больше 100?", 0);
} while (number <= 100 && number);
//
Напишите
"if", аналогичный
"switch"
важность: 5
Напишите
if.. else,
соответствующий
следующему
switch
    :

        switch (browser) {
            case 'Edge':
                alert("You've got the Edge!");
                break;

            case 'Chrome':
            case 'Firefox':
            case 'Safari':
            case 'Opera':
                alert('Okay we support these browsers too');
                break;

            default:
                alert('We hope that this page looks ok!');
        }
        Решение:
            if (browser == 'Edge') {
                alert("You've got the Edge!");
            } else if (browser == 'Chrome'
                || browser == 'Firefox'
                || browser == 'Safari'
                || browser == 'Opera') {
                alert('Okay we support these browsers too');
            } else {
                alert('We hope that this page looks ok!');
            }
        //
        Переписать
        условия
        "if"
        на
        "switch"
        важность: 4
        Перепишите
        код
        с
        использованием
        одной
        конструкции
        switch
            :

                const number = +prompt('Введите число между 0 и 3', '');

                if (number === 0) {
                    alert('Вы ввели число 0');
                }

                if (number === 1) {
                    alert('Вы ввели число 1');
                }

                if (number === 2 || number === 3) {
                    alert('Вы ввели число 2, а может и 3');
                }
                Решение:
                    const number = +prompt('Введите число между 0 и 3', '');

                switch (number) {
                    case 0:
                        alert('Вы ввели число 0');
                        break;

                    case 1:
                        alert('Вы ввели число 1');
                        break;

                    case 2:
                    case 3:
                        alert('Вы ввели число 2, а может и 3');
                        break;
                }
                //
                Перепишите
                функцию, используя
                оператор
                '?'
                или
                '||'
                важность: 4
                Следующая
                функция
                возвращает
                true, если
                параметр
                age
                больше
                18.

                В
                ином
                случае
                она
                задаёт
                вопрос
                confirm
                и
                возвращает
                его
                результат.function
                checkAge(age)
            {
                if (age > 18) {
                    return true;
                } else {
                    return confirm('Родители разрешили?');
                }
            }
                Перепишите
                функцию, чтобы
                она
                делала
                то
                же
                самое, но
                без
                if,
                в
                одну
                строку.Сделайте
                два
                варианта
                функции
                checkAge:

                    Используя
                оператор ?
                    Используя оператор ||
                    Решение
            :

            function checkAge(age) {
                return (age > 18) ? true : confirm('Родители разрешили?');
            }

                Укороченый
                вариант:
                    function checkAge(age) {
                        return (age > 18) || confirm('Родители разрешили?');
                    }
                //
                Функция
                min(a, b)
                важность: 1
                Напишите
                функцию
                min(a, b), которая
                возвращает
                меньшее
                из
                чисел
                a
                и
                b.Пример
                вызовов:

                    min(2, 5) == 2
                min(3, -1) == -1
                min(1, 1) == 1
                Решение
                c
                If:
                    function min(a, b) {
                        if (a < b) {
                            return a;
                        } else {
                            return b;
                        }
                    }
                //
                Решение
                с ?
                    function min(a, b) {
                        return a < b ? a : b;
                    }
                    //
                    Функция
                pow(x, n)
                важность: 4
                Напишите
                функцию
                pow(x, n), которая
                возвращает
                x
                в
                степени
                n.Иначе
                говоря, умножает
                x
                на
                себя
                n
                раз
                и
                возвращает
                результат.pow(3, 2) = 3 * 3 = 9
                pow(3, 3) = 3 * 3 * 3 = 27
                pow(1, 100) = 1 * 1 *
            ...*
                1 = 1
                Создайте
                страницу, которая
                запрашивает
                x
                и
                n, а
                затем
                выводит
                результат
                pow(x, n).Решение
            :

            function pow(x, n) {
                let result = x;

                for (let i = 1; i < n; i++) {
                    result *= x;
                }

                return result;
            }

                let x = prompt("x?", '');
                let n = prompt("n?", '');

                if (n < 1) {
                    alert('${n}');
                } else {
                    alert(pow(x, n));
                }
                Перепишите
                с
                использованием
                функции - стрелки
                Замените
                код
                Function
                Expression
                стрелочной
                функцией:

                    function ask(question, yes, no) {
                        if (confirm(question)) yes()
                        else no();
                    }

                ask(
                    "Вы согласны?",
                    function () {
                        alert("Вы согласились.");
                    },
                    function () {
                        alert("Вы отменили выполнение.");
                    }
                );
                Решение:
                    function ask(question, yes, no) {
                        if (confirm(question)) yes()
                        else no();
                    }

                ask(
                    "Вы согласны?",
                    () => alert("Вы согласились."),
                    () => alert("Вы отменили выполнение.")
                );
                Проверка
                синтаксиса
                важность: 2
                Каким
                будет
                результат
                выполнения
                этого
                кода ?

                    let user = {
                        name: "Джон",
                        go: function () {
                            alert(this.name)
                        }
                    }

                    (user.go)()
                Решение:
                    let user = {
                        name: "Джон",
                        go: function () {
                            alert(this.name)
                        }
                    };

                (user.go)()
                Использование
                "this"
                в
                литерале
                объекта
                важность: 5
                Здесь
                функция
                makeUser
                возвращает
                объект.Каким
                будет
                результат
                при
                обращении
                к
                свойству
                объекта
                ref ? Почему ?

                    function makeUser() {
                        return {
                            name: "Джон",
                            ref: this
                        };
                    };

                let user = makeUser();

                alert(user.ref.name); // Каким будет результат?
                Решение:
                    function makeUser() {
                        return {
                            name: "Джон",
                            ref() {
                                return this;
                            }
                        };
                    }
                ;

                let user = makeUser();

                alert(user.ref().name);
                //
                Создайте
                калькулятор
                важность: 5
                Создайте
                объект
                calculator(калькулятор)
                с
                тремя
                методами:

                    read()(читать)
                запрашивает
                два
                значения
                и
                сохраняет
                их
                как
                свойства
                объекта.sum()(суммировать)
                возвращает
                сумму
                сохранённых
                значений.mul()(умножить)
                перемножает
                сохранённые
                значения
                и
                возвращает
                результат.let
                calculator = {
                    // ... ваш код ...
                };

                calculator.read();
                alert(calculator.sum());
                alert(calculator.mul());
                Решение:
                    let calculator = {
                        sum() {
                            return this.a + this.b;
                        },

                        mul() {
                            return this.a * this.b;
                        },

                        read() {
                            this.a = +prompt('a?', 0);
                            this.b = +prompt('b?', 0);
                        }
                    };

                calculator.read();
                alert(calculator.sum());
                alert(calculator.mul());
                //
                Цепь
                вызовов
                важность: 2
                Это
                ladder(лестница) – объект, который
                позволяет
                подниматься
                вверх
                и
                спускаться:

                    let ladder = {
                        step: 0,
                        up() {
                            this.step++;
                        },
                        down() {
                            this.step--;
                        },
                        showStep: function () { // показывает текущую ступеньку
                            alert(this.step);
                        }
                    };
                Теперь, если
                нам
                нужно
                сделать
                несколько
                последовательных
                вызовов, мы
                можем
                выполнить
                это
                так:

                    ladder.up();
                ladder.up();
                ladder.down();
                ladder.showStep(); // 1
                Измените
                код
                методов
                up, down
                и
                showStep
                таким
                образом, чтобы
                их
                вызов
                можно
                было
                сделать
                по
                цепочке, например
                так:

                    ladder.up().up().down().showStep(); // 1
                Решение:
                    let ladder = {
                        step: 0,
                        up() {
                            this.step++;
                            return this;
                        },
                        down() {
                            this.step--;
                            return this;
                        },
                        showStep() {
                            alert(this.step);
                            return this;
                        }
                    }

                ladder.up().up().down().up().down().showStep();
//
                Две
                функции - один
                объект
                важность: 2
                Возможно
                ли
                создать
                функции
                A
                и
                B
                в
                примере
                ниже, где
                объекты
                равны
                new A() == new B() ?

                    function A() { ...
                    }
                    function B() { ...
                    }

                let a = new A;
                let b = new B;

                alert(a == b); // true
                Если
                да – приведите
                пример
                вашего
                кода.Решение
            :
                let obj = {};

            function A() {
                return obj;
            }

            function B() {
                return obj;
            }

                alert(new A() == new B());
                //
                Создание
                калькулятора
                при
                помощи
                конструктора
                важность: 5
                Создайте
                функцию - конструктор
                Calculator, который
                создаёт
                объекты
                с
                тремя
                методами:

                    read()
                запрашивает
                два
                значения
                при
                помощи
                prompt
                и
                сохраняет
                их
                значение
                в
                свойствах
                объекта.sum()
                возвращает
                сумму
                введённых
                свойств.mul()
                возвращает
                произведение
                введённых
                свойств.Например
            :

                let calculator = new Calculator();
                calculator.read();

                alert("Sum=" + calculator.sum());
                alert("Mul=" + calculator.mul());
                Решение:
                    function Calculator() {

                        this.read = function () {
                            this.a = +prompt('a?', 0);
                            this.b = +prompt('b?', 0);
                        };

                        this.sum = function () {
                            return this.a + this.b;
                        };

                        this.mul = function () {
                            return this.a * this.b;
                        };
                    }

                let calculator = new Calculator();
                calculator.read();

                alert("Sum=" + calculator.sum());
                alert("Mul=" + calculator.mul());