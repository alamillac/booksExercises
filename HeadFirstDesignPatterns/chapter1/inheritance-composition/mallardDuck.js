var Duck = require('./duck'),
    duckBehaviors = require('./duckBehaviors');

function MallardDuck() {
    Duck.apply(this, arguments);
    this.fly = duckBehaviors.flyWithWings;
    this.quack = duckBehaviors.quack;
}

MallardDuck.prototype = Object.create(Duck.prototype);
MallardDuck.prototype.constructor = Duck;

MallardDuck.prototype.display = function() {
    this.show("looks like a mallard");
}

module.exports = MallardDuck;
