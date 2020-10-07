module.exports = function toReadable(number) {
    let obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    let hundreds = 0,
        tens = 0,
        ones = 0,
        result = '';
    hundreds = Math.trunc(number / 100);
    tens = Math.trunc((number - hundreds * 100) / 10);
    ones = number - (hundreds * 100 + tens * 10);

    if (hundreds === 0) {
        if (obj.hasOwnProperty(number)) {
            result = (obj[number]);
        } else result = (`${obj[tens*10]} ${obj[ones]}`);
    } else if (tens === 0 && ones === 0) {
        result = (`${obj[hundreds]} hundred`);
    } else if (ones === 0 && tens !== 0) {
        result = (`${obj[hundreds]} hundred ${obj[(number - hundreds*100)]}`);
    } else if (ones !== 0 && tens === 0) {
        result = (`${obj[hundreds]} hundred ${obj[ones]}`);
    } else if (ones !== 0 && tens !== 0) {
        if (obj.hasOwnProperty(number - hundreds * 100)) {
            result = (`${obj[hundreds]} hundred ${obj[(number - hundreds*100)]}`);
        } else result = (`${obj[hundreds]} hundred ${obj[tens*10]} ${obj[ones]}`);
    }
    return result;
};
