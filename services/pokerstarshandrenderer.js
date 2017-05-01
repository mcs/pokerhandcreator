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

    result.appendLine(`PokerStars Hand #156632473469:  Hold'em No Limit (${hand.currency.short}${hand.smallblind}/${hand.currency.short}${hand.bigblind}${hand.currency.iso ? " " + hand.currency.iso : ""}) - 2016/07/30 10:40:31 AT [2016/07/30 9:40:31 ET]`);

    result.appendLine(`Table 'Eltigen' ${playercount}-max Seat #${hand.button_position} is the button`);

    for (let i = 0; i < playercount; i += 1) {
        result.appendLine(`Seat ${i+1}: ${hand.players[i].nick} (${hand.players[i].chips} in chips)`);
    }

    result.appendLine(`${hand.players[seatToArrayIdx(hand.button_position + 1)].nick}: posts small blind ${hand.smallblind}`);
    result.appendLine(`${hand.players[seatToArrayIdx(hand.button_position + 2)].nick}: posts big blind ${hand.bigblind}`);


    // *** HOLE CARDS ***
    result.appendLine("*** HOLE CARDS ***");
    result.appendLine(`Dealt to ${hand.players[(hand.hero_position) - 1].nick} [${hand.players[(hand.button_position + 1) % playercount].cards}]`);

    let currentPlayerIdx = seatToArrayIdx(hand.button_position + 3); // UTG






    // *** FLOP ***



    // *** TURN ***



    // *** RIVER ***



    // *** SUMMARY ***


    console.log("------------");
    console.log(result.toString());
    console.log("------------");

}

module.exports = render;