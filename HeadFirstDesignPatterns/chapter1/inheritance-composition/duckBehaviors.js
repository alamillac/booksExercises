function flyWithWings() {
    this.show("I'm flying!!");
}

function flyNoWay() {
    this.show("I can't fly");
}

function muteQuack() {
    this.show("<< Silence >>");
}

function squeak() {
    this.show("Squeak");
}

function quack() {
    this.show("Quack");
}

function flyRocketPowered() {
    this.show("I'm flying with a rocket!");
}

module.exports = {
    flyWithWings,
    flyNoWay,
    muteQuack,
    squeak,
    quack,
    flyRocketPowered
};
