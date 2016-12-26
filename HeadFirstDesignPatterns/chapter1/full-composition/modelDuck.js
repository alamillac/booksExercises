var duckBehaviors = require('./duckBehaviors');

const display = (state) => ({
    display: () => console.log(`${state.name}: I'm a model duck`)
});

function ModelDuck(name) {
    const state = {
        name
    };

    return Object.assign(
        {getState: () => state},
        duckBehaviors.flyWithWings(state),
        duckBehaviors.muteQuack(state),
        duckBehaviors.swim(state),
        display(state)
    );
}

module.exports = ModelDuck;
