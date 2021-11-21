// Как маппить тип?

type RGB = {
    r: number;
    g: number;
    b: number;
};

type Color = {
    color1: RGB;
    color2: RGB;
};

// Создавать клон - плохо
// type ColorCode = {
//   color1: number;
//   color2: number;
// };

// Такие самописные утилиты помогают нам мапить другие типы
type toNumberSwitch<Type> = {
    [Property in keyof Type]: number; // Оператор in итерируется по значениям union-типа
};

export type toBooleanSwitch<Type> = {
    [Property in keyof Type]: boolean;
};

export type toStringSwitch<Type> = {
    [Property in keyof Type]: string;
};

const color: toNumberSwitch<Color> = {
    color1: 1,
    color2: 255
};

console.log(color);
