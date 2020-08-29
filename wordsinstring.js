var words = ["able", "ale", "apple", "bale", "kangaroo"];
var string = "abppplee";

function isIn(short, long) {   //is a in b
    long = long.split("");
    short = short.split("");
    for (i = 0; i < long.length; i++) {
        if (short[i] == long[i]) {
            continue;
        }
        else {
            long.splice(i, 1);
            i -= 1;
        }
    }
    console.log(long);
    if (short.length == long.length) {
        return short.length;
    }
    else {
        return 0
    }
}


isIn(words[0], string);
