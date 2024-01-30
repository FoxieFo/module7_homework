// Консольное приложение, переписанное на классы.

class Device {
    constructor(name, weight, color, power) {
      this.name = name;
      this.weight = weight;
      this.color = color;
      this.isOn = false;
      this.power = power;
      Device.myDevices.push(this);
    }
   
    static myDevices = [];

    turnOn() {
        this.isOn = true;
        console.log(`${this.name} is now ON.`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.name} is now OFF.`);
    }

    static calculateTotalPower() {
    let totalPower = 0;

    for (let device of Device.myDevices) {
      if (device.isOn) {
        totalPower += device.power;
      }
    }
    return totalPower;
  }
}

const videoGameConsole = new Device('PlayStation', 4.5, 'Sterling Silver', 220);
const laptop = new Device('MacBook Pro', 1.55, 'Space Black', 131);
const airPurifier = new Device('Xiaomi Smart Air Purifier', 5.6, 'White', 44);

airPurifier['noise level'] = '64 dB';

// Включение устройств
videoGameConsole.turnOn();
airPurifier.turnOn();

// Вывод результата в консоль
console.log(`Total power of all enabled devices is ${Device.calculateTotalPower()} watts`);
