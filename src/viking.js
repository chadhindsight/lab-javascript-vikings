// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

        this.attack = function attack(){
            return this.strength
        };
        this.receiveDamage = function receiveDamage(damage) {
             this.health -= damage
        }
    } 
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };
    receiveDamage(damage) {
        health -= damage
        if (health === 0)  return `${this.name} has has died in act of combat` 
        else  {return `A Saxon has received ${this.damage}`}
    }
}

// Saxon
class Saxon extends Soldier{
    // constructor() {
    //     super()
    // }
    receiveDamage(damage) {
        this.health -= damage
        return this.health === 0 ? `A Saxon has has died in act of combat` : `A Saxon has received ${this.damage}`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy =[];
    }
    // ARMY FUNCTIONS
     addViking = function addViking(viking) {

    };
    addViking = function addSaxon(saxon) {
    }
}
