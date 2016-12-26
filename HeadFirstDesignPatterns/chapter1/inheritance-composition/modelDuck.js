var Duck = require('./duck'),
    duckBehaviors = require('./duckBehaviors');

function ModelDuck() {
    Duck.apply(this, arguments);
    this.fly = duckBehaviors.flyWithWings;
    this.quack = duckBehaviors.muteQuack;
}

ModelDuck.prototype = Object.create(Duck.prototype);
ModelDuck.prototype.constructor = Duck;

ModelDuck.prototype.display = function() {
    this.show("I'm a model duck");
}

module.exports = ModelDuck;
