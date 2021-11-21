// Как сужать тип?

type Employee = {
    id: string;
    name: string;
    age: number;
    sex: string;
    dateOfBirth: Date;
    // ... много чего еще
};

// Обычно мы делаем так:
// const getUserLabel = ({name, age}: Employee): string => {
//   return `${age} ${name}`
// }

// Приходится использовать полный объект, когда как нужно всего пара полей
// console.log(getUserLabel({
//   id: 'subscribe',
//   name: 'Inna',
//   age: 22,
//   sex: 'female',
//   dateOfBirth: new Date()
// }))

// as - костыль! Избегай его!
// console.log(getUserLabel({
//   name: 'Inna',
//   age: 22,
// } as Employee))

// Pick - утилита для сужения типов
// Передаем ей базовый тип Employee
// И юнион тип из тех значений, которые нам нужны в функции
const getUserLabel = ({
    name,
    age
}: Pick<Employee, "name" | "age">): string => {
    return `${age} ${name}`;
};

// Теперь можем использовать объект из двух нужных полей
console.log(
    getUserLabel({
        name: "Inna",
        age: 22
    })
);

// Общий тип
type BaseType = {
    a: number;
    // общие свойства
};

// Получаем частный тип из общего с помощью сужения типов
export type CurrentType = Pick<BaseType, "a">;
