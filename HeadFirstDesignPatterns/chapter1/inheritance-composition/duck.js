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

module.exports = Duck;
