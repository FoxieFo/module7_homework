//Консольное приложение на прототипах

// Функция для создания устройства
function Device(name, weight, color, power) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.isOn = false;
    this.power = power;
  
    // Добавление созданного объекта в массив
    myDevices.push(this);
}

// Массив для хранения устройств
const myDevices = [];

// Метод для включения устройства
Device.prototype.turnOn = function () {
    this.isOn = true;
    console.log(`${this.name} is now ON.`);
};

// Метод для выключения устройства
Device.prototype.turnOff = function () {
    this.isOn = false;
    console.log(`${this.name} is now OFF.`);
};

// Функция для подсчета мощности
function calculateTotalPower () {
  let totalPower = 0;
  
  for(let device of myDevices) {
    if (device.isOn) {
      totalPower += device.power;
    }
  }
  return totalPower;
}

// Создание устройств
const videoGameConsole = new Device('PlayStation', 4.5, 'Sterling Silver', 220);
const laptop = new Device('MacBook Pro', 1.55, 'Space Black', 131);
const airPurifier = new Device('Xiaomi Smart Air Purifier', 5.6, 'White', 44);

airPurifier['noise level'] = '64 dB';

// Включение устройств
videoGameConsole.turnOn();
airPurifier.turnOn();

// Вывод результата в консоль
console.log(`Total power of all enabled devices is ${calculateTotalPower()} watts`);
