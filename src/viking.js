// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    } 
        attack = function attack() {
        return this.strength
    };
    receiveDamage = function receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        
        this.attack = function attack(){
            return this.strength
        };
        this.receiveDamage = function receiveDamage(damage) {
            this.health -= damage
            console.log(damage)
            if (health <= 0 || damage === 300) return `${name} has died in act of combat`
             { return `${name} has received ${damage} points of damage` }
        }
    };
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
        this.receiveDamage = function receiveDamage(damage) {
            this.health -= damage
            return this.health === 0 ? `A Saxon has has died in act of combat` : `A Saxon has received ${this.damage}`
        };
        this.attack = function attack() {
            return this.strength
        }
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
       new Viking(viking)
        this.vikingArmy.push(viking)
        // console.log(this.vikingArmy)
    };

    addSaxon = function addSaxon(saxon) {
        new Saxon(saxon)
        this.saxonArmy.push(saxon)
    };
    
    // vikingAttack = function vikingAttack(){
    //     Saxon.receiveDamage(Viking.strength)
    // };

    // saxonAttack = function saxonAttack() {

    // };
    howStatus = function howStatus(){
        
    };
}
