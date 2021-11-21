// Как keyof нам может помочь?

// Есть время истечения срока подписки
type ExpiryDateTime = {
    days: string;
    hours: number;
    minutes: number;
    seconds: number;
};

// Соответсвующий объект
let expiryDateTime: ExpiryDateTime = {
    days: '0',
    hours: 0,
    minutes: 0,
    seconds: 0
};

// Функция для изменения объекта по ключу
const change = <T extends keyof ExpiryDateTime>(
    key: T, // Вот тут keyof создает нам юнион тип из свойств ExpiryDateTime
    value: ExpiryDateTime[T],
    expiryDateTime: ExpiryDateTime
): ExpiryDateTime => {
    return { ...expiryDateTime, [key]: value };
};

expiryDateTime = change('hours', 1, expiryDateTime);

console.log(expiryDateTime);
