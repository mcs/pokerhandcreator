function render(handinfo) {

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
    const playercount = handinfo.players.length;

    handinfo.currency = handinfo.currency || {short: "", iso: ""};
    handinfo.buttonpos = parseInt(handinfo.buttonpos, 10);
    handinfo.heropos = parseInt(handinfo.heropos, 10);


    result.appendLine(`PokerStars Hand #156632473469:  Hold'em No Limit (${handinfo.currency.short}${handinfo.smallblind}/${handinfo.currency.short}${handinfo.bigblind}${handinfo.currency.iso ? " " + handinfo.currency.iso : ""}) - 2016/07/30 10:40:31 AT [2016/07/30 9:40:31 ET]`);

    result.appendLine(`Table 'Eltigen' ${playercount}-max Seat #${handinfo.buttonpos} is the button`);

    for (let i = 0; i < playercount; i += 1) {
        result.appendLine(`Seat ${i + 1}: ${handinfo.players[i].name} (${handinfo.players[i].stack} in chips)`);
    }

    result.appendLine(`${handinfo.players[seatToArrayIdx(handinfo.buttonpos + 1)].name}: posts small blind ${handinfo.smallblind}`);
    result.appendLine(`${handinfo.players[seatToArrayIdx(handinfo.buttonpos + 2)].name}: posts big blind ${handinfo.bigblind}`);


    // *** HOLE CARDS ***
    result.appendLine("*** HOLE CARDS ***");
    result.appendLine(`Dealt to ${handinfo.players[seatToArrayIdx(handinfo.heropos)].name} [${handinfo.players[seatToArrayIdx(handinfo.heropos)].cards.join(" ")}]`);

    let currentPlayerIdx = seatToArrayIdx(handinfo.buttonpos + 3); // UTG


    // *** FLOP ***
    if (handinfo.preflop) {
        for (let i = 0; i < handinfo.preflop.length; i += 1) {
            let cur = handinfo.preflop[i];
            switch (cur.action) {
                case "FOLD":
                    result.appendLine(`${cur.name}: folds`);
                    break;
                case "CALL":
                    result.appendLine(`${cur.name}: calls ${cur.amount}`);
                    break;
                case "RAISE":
                    result.appendLine(`${cur.name}: raises ${cur.raise} to ${cur.amount}`);
                    break;
            }
        }
    }


    // *** TURN ***


    // *** RIVER ***


    // *** SUMMARY ***


    console.log("------------");
    console.log(result.toString());
    console.log("------------");

    return result.toString();
}

module.exports = render;