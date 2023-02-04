class Character {
    constructor(name, type, subtype, attack, defend, colorCost, colorlessCost, color) {
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.attack = attack;
        this.defend = defend;
        this.colorCost = colorCost;
        this.colorlessCost = colorlessCost
        this.color = color;
    }
    printStats() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Subtype: ${this.subtype}, Attack: ${this.attack}, Defend: ${this.defend}, Color Cost: ${this.colorCost}, Colorless Cost: ${this.colorlessCost}, Color: ${this.color}`)
    }
    castSpell(manaPool) {
        let onTable = false;

        if (this.color === colorless) {
            if (this.colorlessCost < manaPool.totalMana) {
                onTable = true;
                manaPool.totalMana = manaPool.totalMana - this.colorlessCost;
            } else {
                return "You need more mana to play this!"
            }
        } else {
            return "You need more mana to play this!"

        }
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

const meteorGolem = new Character("Meteor Golem", "artifact creature", "golem", 3, 3, 0, 7, "colorless");
const bristlingBoar = new Character("Bristling Boar", "creature", "boar", 4, 3, 1, 3, "green");
meteorGolem.printStats();
bristlingBoar.printStats();

class Enchantment {
    constructor(name, type, subtype, colorCost, colorlessCost, text, color) {
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.colorCost = colorCost;
        this.colorlessCost = colorlessCost;
        this.text = text;
    }
}

class Sorcery {
    constructor(name, type, subtype, colorCost, colorlessCost, text, color) {
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.colorCost = colorCost;
        this.colorlessCost = colorlessCost;
        this.text = text
    }
}

class Instant {
    constructor(name, type, subtype, colorCost, colorlessCost, text, color) {
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.colorCost = colorCost;
        this.colorlessCost = colorlessCost;
        this.text = text;
        this.color = color;
    }
}

class Planeswalker {
    constructor(name, type, subtype, loyalty1, loyalty1Text, loyalty2, loyalty2Text, loyalty3, loyalty3Text, startingLoyalty, color) {
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.loyalty1 = loyalty1;
        this.loyalty1Text = loyalty1Text;
        this.loyalty2 = loyalty2;
        this.loyalty2Text = loyalty2Text;
        this.loyalty3 = loyalty3;
        this.loyalty3Text = loyalty3Text;
        this.startingLoyalty = startingLoyalty;
        this.color = color;
    }
}

class Land {
    constructor(type, name, color, tapped) {
        this.type = type;
        this.name = name;
        this.color = color;
        this.tapped = tapped;
    }
    printStats() {
        console.log(`LAND::: Type: ${this.type}, Name: ${this.name}, Color: ${this.color}, Tapped: ${this.tapped}`)
    }
    tapForMana(manaPool) {
        if (this.tapped === false) {
            manaPool.addMana(this.color)
            this.tapped = true;
        } else {
            return "This land has already been tapped!"
        }

    }
}

const forest = new Land("basic", "forest", "green", false);
const mountain = new Land("basic", "mountain", "red", false);
const swamp = new Land("basic", "swamp", "black", false);
const plains = new Land("basic", "plains", "white", false);
const island = new Land("basic", "island", "blue", false);
forest.printStats()

class ManaPool {
    constructor(white, blue, black, red, green, colorless, totalMana) {
        this.white = white;
        this.blue = blue;
        this.black = black;
        this.red = red;
        this.green = green;
        this.colorless = colorless;
        this.totalMana = totalMana;
    }
    addMana(color) {
        switch (color) {
            case "white":
                this.white++
                this.totalMana++
                break
            case "blue":
                this.blue++
                this.totalMana++
                break
            case "black":
                this.black++
                this.totalMana++
                break
            case "red":
                this.red++
                this.totalMana++
                break
            case "green":
                this.green++
                this.totalMana++
                break
            case "colorless":
                this.colorless++
                this.totalMana++
                break
        }
    }

}

const myMana = new ManaPool(0, 0, 0, 0, 0, 0)
console.log(myMana)

exports.Character = Character;
exports.Land = Land;
exports.ManaPool = ManaPool;
exports.Enchantment = Enchantment;
exports.Sorcery = Sorcery;
exports.Instant = Instant;
exports.Planeswalker = Planeswalker;