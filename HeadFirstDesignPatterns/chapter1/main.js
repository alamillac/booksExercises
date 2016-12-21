var MallardDuck = require('./mallardDuck'),
    ModelDuck = require('./modelDuck');
    duckBehaviors = require('./duckBehaviors');

mallard = new MallardDuck('mallard');
model = new ModelDuck('model1');
model2 = new ModelDuck('model2');
model.display();
model.swim();
model.performFly();
model2.performFly();
model.performQuack();
model2.performQuack();
model.fly = duckBehaviors.flyRocketPowered;
model.performFly();
model2.performFly();
mallard.display();
mallard.performQuack();
mallard.performFly();
