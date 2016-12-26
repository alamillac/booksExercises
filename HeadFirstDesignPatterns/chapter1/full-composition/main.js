var MallardDuck = require('./mallardDuck'),
    ModelDuck = require('./modelDuck'),
    duckBehaviors = require('./duckBehaviors');

mallard = MallardDuck('mallard');
model = ModelDuck('model1');
model2 = ModelDuck('model2');
model.display();
model.swim();
model.fly();
model2.fly();
model.quack();
model2.quack();
model.fly = duckBehaviors.flyRocketPowered(model.getState()).fly;
model.fly();
model2.fly();
mallard.display();
mallard.quack();
mallard.fly();
