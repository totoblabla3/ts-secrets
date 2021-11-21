// Когда нужны дженерики?

// Функция каркас
function identity<Type>(argument: Type): Type {
    return argument;
}

// Вызываем функцию с конкретным типом
const number = identity<number>(123);

interface MobileHouse {
    model: string;
}

// А можем вызвать так
const mobileHouse = identity<MobileHouse>({ model: "Hymer" });

console.log(number, mobileHouse);

// Общий тип c дженериком Type
type APIResponse<Type> = {
    items?: Type[]; // Данные могут быть в виде списка
    item: Type; // Или одним элементом, если идет запрос по id
};

// Конкретный тип User
type User = {
    id: string;
};

// fetchAPI - это тоже каркас.
// Принимает дженерик тип и возвращает промис с этим типом
const fetchAPI = <Type>(url: string): Promise<APIResponse<Type>> => {
    return fetch(url).then((response) => response.json());
};

export const getUser = (id: string): Promise<User> => {
    // В этой функции мы используем fetchAPI с конкретным типом User
    return fetchAPI<User>(`/v1/user/${id}`).then(({ item }) => item);
};
