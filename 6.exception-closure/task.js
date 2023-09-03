
// --------------------------------------------------Задание первое----------------------------------------------------------------------
function parseCount(namber){ // Создаем функцию и принимаем входящий номер
    if(Number.isNaN(Number.parseFloat(namber))){ // Проверяем на NaN и парсим
         throw new Error("Невалидное значение");// Выбрасываем исключения 
    }
    return parseFloat(namber);// Возвращаем распарсенное значение
}

function validateCount(namber){ // Создаем функцию и принимаем входящий номер
    try {
        return parseCount(namber);// Возвращаем значение которое распарчили
    } catch (error) { // отловили ошибку и поместили ее в error
        return error; // Вернули ошибку
    }   
}


// --------------------------------------------------Задание второе----------------------------------------------------------------------

class Triangle {
    constructor (a, b, c) {
        if(a + b < c || a + c < b || b + c < a){
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter(){
        return this.a + this.b + this.c;
    }

    get area(){
        let p = this.perimeter / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        return +s.toFixed(3);    
    }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area(){
                return "Ошибка! Треугольник не существует"
            },
            get perimeter(){
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}