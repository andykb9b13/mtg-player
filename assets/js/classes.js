class Character {
    constructor(name, type, subtype, attack, defend, manaValue, color) {
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.attack = attack;
        this.defend = defend;
        this.manaValue = manaValue;
        this.color = color;
    }
    printStats() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Subtype: ${this.subtype}, Attack: ${this.attack}, Defend: ${this.defend}, Mana Cost: ${this.manaValue}, Color: ${this.color}`)
    }
    attack(opponent) {
        opponent.defend = opponent.defend - this.attack;
    }
    isOpponentAlive() {
        if (opponent.defend <= 0) {
            return false
        } else {
            return true
        }
    }
}

const meteorGolem = new Character("Meteor Golem", "artifact creature", "golem", 3, 3, 7, "colorless");
meteorGolem.printStats();

class Land {
    constructor(type, name, color) {
        this.type = type;
        this.name = name;
        this.color = color;
    }
    printStats() {
        console.log(`Type: ${this.type}, Name: ${this.name}, Color: ${this.color}`)
    }
    tapForMana() {

    }
}

class ManaPool {
    constructor(white, blue, black, red, green) {
        this.white = white;
        this.blue = blue;
        this.black = black;
        this.red = red;
        this.green = green;
    }
    addMana(color) {
        switch (color) {
            case "white":
                this.white++
                break
            case "blue":
                this.blue++
                break
            case "black":
                this.black++
                break
            case "red":
                this.red++
                break
            case "green":
                this.green++
                break
        }
    }
}

const myMana = new ManaPool(0, 0, 0, 0, 0)