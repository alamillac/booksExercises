const show = (state, msj) => console.log(`${state.name}: ${msj}`);

const flyWithWings = (state) => ({
    fly: () => show(state, "I'm flying!!")
});

const flyNoWay = (state) => ({
    fly: () => show(state, "I can't fly")
});

const muteQuack = (state) => ({
    quack: () => show(state, "<< Silence >>")
});

const squeak = (state) => ({
    quack: () => show(state, "Squeak")
});

const quack = (state) => ({
    quack: () => show(state, "Quack")
})

const flyRocketPowered = (state) => ({
    fly: () => show(state, "I'm flying with a rocket!")
})

const swim = (state) => ({
    swim: () => show(state, "All ducks float, even decoys!")
})

module.exports = {
    flyWithWings,
    flyNoWay,
    muteQuack,
    squeak,
    quack,
    flyRocketPowered,
    swim
};
