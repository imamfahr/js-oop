

class enemy {
    constructor (name, speed, healthPoint, attackPoint, isDead){
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }
}

class pocong extends enemy {

    jump(){
        this.attackPoint += 300;
        return this.attackPoint;
    }

    superJump(){
        this.attackPoint += 2000;
        return this.attackPoint;
    }

}

let barbara = new pocong ("wild pocong", 500, 5000, 300, true);

console.log(barbara.jump());
console.log(barbara.superJump());

class zombie extends enemy {

    walking(){
        this.attackPoint += 10;
        return this.attackPoint;
    }

    running(){
        this.attackPoint += 1500;
        return this.attackPoint;
    }

}

let palvin = new zombie ("wild zombie", 50, 1000, 100, true);

console.log(palvin.walking());
console.log(palvin.running());