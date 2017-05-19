module.exports = {
    smallblind: "5000",
    bigblind: "10000",
    currency: {
        iso: "",
        short: ""
    },
    buttonpos: 1,
    heropos: 3,
    players: [
        {name: "aaa", stack: 20000},
        {name: "bbb", stack: 10000},
        {name: "syn", stack: 15000, cards: "Ad 7d"},
        {name: "ddd", stack: 25000},
        {name: "eee", stack: 1000},
        {name: "fff", stack: 35000}
    ],
    preflop: [
        {name: "ddd", action: "FOLD"},
        {name: "eee", action: "CALL", amount: "10000"},
        {name: "fff", action: "RAISE", raise: "18000", amount: "28000"},
        {name: "aaa", action: "CALL", amount: "28000"},
        {name: "bbb", action: "FOLD"},
        {name: "syn", action: "CALL", amount: "18000"},
        {name: "eee", action: "CALL", amount: "18000"}
    ]
};