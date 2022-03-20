// code your solution here
function saturdayFun(msg) {
    if (msg != null)
        return 'This Saturday, I want to bathe my dog!';
    else
        return 'This Saturday, I want to roller-skate!';
}
function mondayWork(msg) {
    if (msg != null)
        return 'This Monday, I will work from home.';
    else
        return 'This Monday, I will go to the office.';
}
function wrapAdjective() {
    function wrapAdjective2() {
        var msg = 'You are';
        wrapAdjective2("*");
        var emphatic = wrapAdjective2("a hard worker");
        msg = msg + emphatic;
        return msg;
    }
}