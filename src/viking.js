// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

        this.attack = function attack(){
            return this.strength
        };
        this.receiveDamage = function receiveDamage(damage) {
            this.health -= this.damage
        }
    } 
}

// Viking
class Viking extends Soldier{
    constructor(name) {
        super(health, strength)
        this.receiveDamage = function receiveDamage(damage) {
            this.health = this.damage
            return this.health === 0 ? `${this.name}has died in act of combat` : `${this.name} has received ${this.damage}`
        };
        this.battleCry() = function battleCry() {
            return "Odin Owns You All!"
        }
    }
}

// Saxon
class Saxon extends Soldier{
    // constructor() {
    //     super()
    // }
    receiveDamage(damage) {
        this.health = this.damage
        return this.health === 0 ? `A ${this.name}has died in act of combat` : `A ${this.name} has received ${this.damage}`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy =[];
    }
    // ARMY FUNCTIONS
     addViking = function addViking() {

    };
    addViking = function addSaxon() {
    }
}
