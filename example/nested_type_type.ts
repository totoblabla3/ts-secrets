// Как получить тип вложенного типа?
// Это пример хорошей организации типов

// Есть общий интрерфейс Person
interface Person {
  name: string;
  lastName: string;
  id: string;
}

// Енам лицензий пилота
enum LicenseType {
  STUDENT = "Student",
  SPORT = "Sport",
  COMMERCIAL = "Commercial",
  FLIGHT_INSTRUCTOR = "FLIGHT Instructor"
}

// Сам пилот
interface Pilot extends Person {
  licenseNumber: number;

  // У него есть свойство licenseType с типом LicenseType
  // Собирать тип из маленьких типов - хорошая практика
  licenseType: LicenseType;
}

// Теперь аргумент функции мы также типизируем с LicenseType
const isCommercialLicense = (license: LicenseType) =>
  license === LicenseType.COMMERCIAL;

const commercialPilot: Pilot = {
  name: "Ivan",
  lastName: "Petrov",
  id: "a",
  licenseNumber: 2022,
  licenseType: LicenseType.COMMERCIAL
};

// Все красиво типизируется
console.log(isCommercialLicense(commercialPilot.licenseType));

// Теперь плохой пример
//
interface JetEngine {
  model: {
    name: string;
    serialNumber: number;
    type: "turbo" | "turbofan" | "ramjet";
  };

  // У нас теперь есть такой union-тип.
  // По-хорошему такое нужно выносить в енам
  state: "disabled" | "power-up" | "ready";
}

// Мы могли бы попытаться сделать так, но это было бы неправильно:
// const checkStateReadiness = (value: string) => value === "ready";
// const checkStateReadiness = (value: JetEngine.state) => value === "ready";

// Зато можно вытащить вложенный тип через скобочную запись
const checkStateReadiness = (value: JetEngine["state"]) => value === "ready";

// Теперь функция хорошо типизируется
// console.log(checkStateReadiness("Bullshit"));