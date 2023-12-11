function Player(name) {
        this.name = name;
        this.lvl = 1;
        this.points = 0;
    }

Player.prototype.gainXp = function (xp) {
    this.points += xp;

    if (this.points >= 10) {
        this.lvl += 1
        this.points -= 10;
    }
}

Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points} points`;
}

const player1 = new Player ('Ricky');
const player2 = new Player ('Ronny');

player1.gainXp(2);
player2.gainXp(6);
player1.gainXp(8);
player2.gainXp(5);
player1.gainXp(2);
player2.gainXp(7);


console.log(player1.describe());
console.log(player2.describe());