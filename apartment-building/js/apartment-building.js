class Human {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
}
class Apartment {
    citizens = []
    addCitizen(human) {
        this.citizens.push(human)
    }
}

class Building {
    apartments = []
    constructor(max) {
        this.max = max
    }
    addApartment(apartment) {
        if (this.apartments.length < this.max) {
            this.apartments.push(apartment)
        } else {
            console.log('Max number of apartments in the building has been reached')
        }
    }
}

const peter = new Human('Peter', 'male')
const anne = new Human('Anne', 'female')
const john = new Human('John', 'male')

const apartment1 = new Apartment()
const apartment2 = new Apartment()
const apartment3 = new Apartment()

apartment1.addCitizen(peter)
apartment2.addCitizen(anne)
apartment3.addCitizen(john)

const building = new Building(2)

building.addApartment(apartment1)
building.addApartment(apartment2)
building.addApartment(apartment3)
