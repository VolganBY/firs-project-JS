const car = {
    color: 'red',
    maxSpeed: 120,
    logColor() {
        console.log('Цвет: ', this.color);
    },
    logMaxSpeed() {
        console.log('Максимальная скорость: ', this.maxSpeed)
    },
    logFullInformation() {
        this.logColor();
        this.logMaxSpeed();
    },
    go(speed) {
        console.log('Машина едет со коростью: ', speed, ' км/ч');
    }
};

const secondCar = car;
car.color = 'green';

console.log(car);
console.log(secondCar);