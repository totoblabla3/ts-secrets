// Лайфхук 5
// Как типизировать переменную возвращаемым значением функции?

let foo = "bar";
// typeof дает нам тип переменной
let name: typeof foo; // string

// Функция возвращает юнион тип из разных значений
const getHisOrHer = (value: number): "his" | "her" | "its" => {
    if (value === 0) {
        return "its";
    }

    return value % 2 === 0 ? "his" : "her";
};

// Утилита ReturnType помогает нам взять тип, который функция возвращает
const pronoun: ReturnType<typeof getHisOrHer> = getHisOrHer(3);

console.log(pronoun);
console.log(name);