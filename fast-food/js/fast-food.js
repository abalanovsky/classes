class Hamburger {
    static SIZE_SMALL = {
        value: 50,
        calories: 20
    }
    static SIZE_BIG = {
        value: 100,
        calories: 40
    }
    static STUFFING_CHEESE = {
        value: 10,
        calories: 20
    }
    static STUFFING_SALAD = {
        value: 20,
        calories: 5
    }
    static STUFFING_POTATO = {
        value: 15,
        calories: 10
    }
    static TOPPING_SEASONING = {
        value: 15,
        calories: 0
    }
    static TOPPING_MAYO = {
        value: 20,
        calories: 5
    }
    constructor(size, stuffing) {
        this.value = size.value + stuffing.value
        this.calories = size.calories + stuffing.calories
    }

    addTopping(topping) {
        this.value += topping.value
        this.calories += topping.calories
    }
    calculatePrice() {
        return this.value
    }
    calculateCalories() {
        return this.calories
    }
}

const burger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE)
burger.addTopping(Hamburger.TOPPING_SEASONING)
console.log(`Calories: ${burger.calculateCalories()}`);
console.log(`Price: ${burger.calculatePrice()}₮`);
burger.addTopping(Hamburger.TOPPING_MAYO)
console.log(`Price: ${burger.calculatePrice()}₮`);
