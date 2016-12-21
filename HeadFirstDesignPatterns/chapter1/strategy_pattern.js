// Duck
function Duck(name) {
    this.name = name;
    this.fly = function() {
        console.error("Not implemented");
    };
    this.quack = function() {
        console.error("Not implemented");
    };
}

Duck.prototype.show = function(msj) {
    console.log(`${this.name}: ${msj}`);
}

Duck.prototype.performFly = function() {
    this.fly();
}

Duck.prototype.performQuack = function() {
    this.quack();
}

Duck.prototype.swim = function() {
    this.show("All ducks float, even decoys!");
}

Duck.prototype.display = function() {
    console.error("Not implemented");
}

// Behaviors
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

// ModelDuck
function ModelDuck() {
    Duck.apply(this, arguments);
    this.fly = flyWithWings;
    this.quack = muteQuack;
}

ModelDuck.prototype = Object.create(Duck.prototype);
ModelDuck.prototype.constructor = Duck;

ModelDuck.prototype.display = function() {
    this.show("I'm a model duck");
}

// MallardDuck
function MallardDuck() {
    Duck.apply(this, arguments);
    this.fly = flyWithWings;
    this.quack = quack;
}

MallardDuck.prototype = Object.create(Duck.prototype);
MallardDuck.prototype.constructor = Duck;

MallardDuck.prototype.display = function() {
    this.show("looks like a mallard");
}

// Main
mallard = new MallardDuck('mallard');
model = new ModelDuck('model1');
model2 = new ModelDuck('model2');
model.display();
model.swim();
model.performFly();
model2.performFly();
model.performQuack();
model2.performQuack();
model.fly = flyRocketPowered;
model.performFly();
model2.performFly();
mallard.display();
mallard.performQuack();
mallard.performFly();
