function Person(name, age) {
    this.pName = name;
    this.pAge = age;
    this.showPersonInfo = function (){
        const pResult = 'Name: ' + this.pName + '\n' + 'Age: ' + this.pAge;
        console.log(pResult)
    }
}

function Car(brand, model, year, number) {
    this.cBrand = brand;
    this.cModel = model;
    this.cYear = year;
    this.cNumber = number;
    this.carOwner = function (cOwner){
        this.owner = cOwner;
    }
    this.showCarInfo = function (){
        const cResult = 'Brand: ' + this.cBrand + '\n' +
                        'Model: ' + this.cModel + '\n' +
                        'Year: ' + this.cYear + '\n' +
                        'Number: ' + this.cNumber;
        console.log(cResult);
        this.owner.showPersonInfo();
    }
}

const person1 = new Person('Mike', 19);
const person2 = new Person('Jack', 29);
const person3 = new Person('Bill', 39);

const car1 = new Car('Toyota', 'AE-86', 1986, 'AE0000AA');
const car2 = new Car('Nissan', 'Skyline', 1998, 'AE1111AA');
const car3 = new Car('Mazda', 'RX-7', 2000, 'AE2222AA');

person1.showPersonInfo();
console.log('...........')
person2.showPersonInfo();
console.log('...........')
person3.showPersonInfo();
console.log('...........')

car1.carOwner(person1);
car1.showCarInfo();
console.log('...........')

car2.carOwner(person2);
car2.showCarInfo();
console.log('...........')

car3.carOwner(person3);
car3.showCarInfo();
