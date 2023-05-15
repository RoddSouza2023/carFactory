class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    getDescription(){
        return `This is a ${this.make} ${this.model} from ${this.year}`
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year)
        this.range = range
    }

    getDescription() {
        return `This is a ${this.make} ${this.model} from ${this.year} that has a range of ${this.range} miles on a full charge`
    }
}

let newCar = new ElectricCar("Tesla", "Model S", 2019, 300)
console.log(newCar.getDescription())