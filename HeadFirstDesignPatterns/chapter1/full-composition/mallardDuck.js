var duckBehaviors = require('./duckBehaviors');

const display = (state) => ({
    display: () => console.log(`${state.name}: looks like a mallard`)
});

function MallardDuck(name) {
    const state = {
        name
    };

    return Object.assign(
        {getState: () => state},
        duckBehaviors.flyWithWings(state),
        duckBehaviors.quack(state),
        duckBehaviors.swim(state),
        display(state)
    );
}

module.exports = MallardDuck;
