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

    const result = new Result();

    result.appendLine(`PokerStars Hand #156632473469:  Hold'em No Limit ($${hand.smallblind}/$${hand.bigblind} USD) - 2016/07/30 10:40:31 AT [2016/07/30 9:40:31 ET]`);
    result.appendLine(`Table 'Eltigen' ${hand.players}-max Seat #${hand.button_position} is the button`);


    console.log("------------");
    console.log(result.toString());
    console.log("------------");

}

module.exports = render;