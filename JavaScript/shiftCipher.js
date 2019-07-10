// charCodeAt function is used to find ascii code

// String.fromCharCode is used to convert ascii code into the corresp. character

function rot13(str) {

    var n = str.length;

    var res = "";
    for (let i = 0; i < n; i++) {

        var index = str.charCodeAt(i);
        if (index >= 65 && index <= 91) {
            var newIndex = index + 13;
            if (newIndex <= 90) {
                var newChar = String.fromCharCode(index + 13);
                // console.log(newChar);
                res += newChar;
            }
            else {
                var diff = 90 - index;
                var requiredIndex = 65 + (13 - diff) - 1;
                var newChar = String.fromCharCode(requiredIndex);
                // console.log(newChar);
                res += newChar;
            }
        }
        else {
            res += str[i];
            // console.log(res);
        }
    }
    return res;
}

// Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC"));
rot13("SERR PBQR PNZC");
