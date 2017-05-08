function render(hand) {

    function Result() {

        let _text = "";

        this.toString = function () {
            return _text;
        };

        this.appendLine = function (text) {
            _text = _text === ""
                ? text
                : _text + "\n" + text;
        }
    }

    function seatToArrayIdx(seatNumber) {
        return (seatNumber - 1) % playercount;
    }

    const result = new Result();
    const playercount = hand.players.length;

    hand.currency = hand.currency || {short: "", iso: ""};

    result.appendLine(`PokerStars Hand #156632473469:  Hold'em No Limit (${hand.currency.short}${hand.smallblind}/${hand.currency.short}${hand.bigblind}${hand.currency.iso ? " " + hand.currency.iso : ""}) - 2016/07/30 10:40:31 AT [2016/07/30 9:40:31 ET]`);

    result.appendLine(`Table 'Eltigen' ${playercount}-max Seat #${hand.buttonpos} is the button`);

    for (let i = 0; i < playercount; i += 1) {
        result.appendLine(`Seat ${i + 1}: ${hand.players[i].name} (${hand.players[i].stack} in chips)`);
    }

    result.appendLine(`${hand.players[seatToArrayIdx(hand.buttonpos + 1)].name}: posts small blind ${hand.smallblind}`);
    result.appendLine(`${hand.players[seatToArrayIdx(hand.buttonpos + 2)].name}: posts big blind ${hand.bigblind}`);


    // *** HOLE CARDS ***
    result.appendLine("*** HOLE CARDS ***");
    result.appendLine(`Dealt to ${hand.players[seatToArrayIdx(hand.heropos)].name} [${hand.players[seatToArrayIdx(hand.heropos)].cards}]`);

    let currentPlayerIdx = seatToArrayIdx(hand.buttonpos + 3); // UTG


    // *** FLOP ***


    // *** TURN ***


    // *** RIVER ***


    // *** SUMMARY ***


    console.log("------------");
    console.log(result.toString());
    console.log("------------");

    return result.toString();
}

module.exports = render;