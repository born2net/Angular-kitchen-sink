import {Injectable, Injector} from 'angular2/core';

// repo: https://github.com/PawelDecowski/jQuery-CreditCardValidator/

// var b = creditService.validateCardNumber('5418426187097565');
// var b = creditService.validateCardExpiry('10','15');
// var b = creditService.validateCardCVC(123,'visa');
// var b = creditService.parseCardType('5418426187097565');
// var b = creditService.parseCardExpiry('10/2016');
// var b = creditService.formatCardNumber('5418 4261 8709 7565');
// var b = creditService.formatCardNumber('5418-4261-8709 7565');
// var b = creditService.formatCardExpiry('1/16');

@Injectable()
export class CreditService {

    constructor() {
        this.credit = (function () {

            var indexOf = [].indexOf || function (item) {
                    for (var i = 0, l = this.length; i < l; i++) {
                        if (i in this && this[i] === item) return i;
                    }
                    return -1;
                };

            return (function (name, definition) {
                return definition();
            })('cc', function () {
                var _eventNormalize, _getCaretPos, _on, cardFromNumber, cardFromType, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardExpiry, formatCardNumber, formatForwardExpiry, formatForwardSlashAndSpace, hasTextSelected, luhnCheck, payform, reFormatCVC, reFormatCardNumber, reFormatExpiry, replaceFullWidthChars, restrictCVC, restrictCardNumber, restrictExpiry, restrictNumeric;
                _getCaretPos = function (ele) {
                    var r, rc, re;
                    if (ele.selectionStart != null) {
                        return ele.selectionStart;
                    } else if (this.doc.selection != null) {
                        ele.focus();
                        r = this.doc.selection.createRange();
                        re = ele.createTextRange();
                        rc = re.duplicate();
                        re.moveToBookmark(r.getBookmark());
                        rc.setEndPoint('EndToStart', re);
                        return rc.text.length;
                    }
                };
                _eventNormalize = function (listener) {
                    return function (e) {
                        if (e == null) {
                            e = window.event;
                        }
                        e.target = e.target || e.srcElement;
                        e.which = e.which || e.keyCode;
                        if (e.preventDefault == null) {
                            e.preventDefault = function () {
                                return this.returnValue = false;
                            };
                        }
                        return listener(e);
                    };
                };
                _on = function (ele, event, listener) {
                    listener = _eventNormalize(listener);
                    if (ele.addEventListener != null) {
                        return ele.addEventListener(event, listener, false);
                    } else {
                        return ele.attachEvent("on" + event, listener);
                    }
                };
                payform = {};
                defaultFormat = /(\d{1,4})/g;
                payform.cards = [
                    {
                        type: 'visaelectron',
                        pattern: /^4(026|17500|405|508|844|91[37])/,
                        format: defaultFormat,
                        length: [16],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'maestro',
                        pattern: /^(5(018|0[23]|[68])|6(39|7))/,
                        format: defaultFormat,
                        length: [12, 13, 14, 15, 16, 17, 18, 19],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'forbrugsforeningen',
                        pattern: /^600/,
                        format: defaultFormat,
                        length: [16],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'dankort',
                        pattern: /^5019/,
                        format: defaultFormat,
                        length: [16],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'visa',
                        pattern: /^4/,
                        format: defaultFormat,
                        length: [13, 16],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'mastercard',
                        pattern: /^(5[1-5]|2[2-7])/,
                        format: defaultFormat,
                        length: [16],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'amex',
                        pattern: /^3[47]/,
                        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                        length: [15],
                        cvcLength: [3, 4],
                        luhn: true
                    }, {
                        type: 'dinersclub',
                        pattern: /^3[0689]/,
                        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
                        length: [14],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'discover',
                        pattern: /^6([045]|22)/,
                        format: defaultFormat,
                        length: [16],
                        cvcLength: [3],
                        luhn: true
                    }, {
                        type: 'unionpay',
                        pattern: /^(62|88)/,
                        format: defaultFormat,
                        length: [16, 17, 18, 19],
                        cvcLength: [3],
                        luhn: false
                    }, {
                        type: 'jcb',
                        pattern: /^35/,
                        format: defaultFormat,
                        length: [16],
                        cvcLength: [3],
                        luhn: true
                    }
                ];
                cardFromNumber = function (num) {
                    var card, i, len, ref;
                    num = (num + '').replace(/\D/g, '');
                    ref = payform.cards;
                    for (i = 0, len = ref.length; i < len; i++) {
                        card = ref[i];
                        if (card.pattern.test(num)) {
                            return card;
                        }
                    }
                };
                cardFromType = function (type) {
                    var card, i, len, ref;
                    ref = payform.cards;
                    for (i = 0, len = ref.length; i < len; i++) {
                        card = ref[i];
                        if (card.type === type) {
                            return card;
                        }
                    }
                };
                luhnCheck = function (num) {
                    var digit, digits, i, len, odd, sum;
                    odd = true;
                    sum = 0;
                    digits = (num + '').split('').reverse();
                    for (i = 0, len = digits.length; i < len; i++) {
                        digit = digits[i];
                        digit = parseInt(digit, 10);
                        if ((odd = !odd)) {
                            digit *= 2;
                        }
                        if (digit > 9) {
                            digit -= 9;
                        }
                        sum += digit;
                    }
                    return sum % 10 === 0;
                };
                hasTextSelected = function (target) {
                    var ref;
                    if ((typeof document !== "undefined" && document !== null ? (ref = this.doc.selection) != null ? ref.createRange : void 0 : void 0) != null) {
                        if (this.doc.selection.createRange().text) {
                            return true;
                        }
                    }
                    return (target.selectionStart != null) && target.selectionStart !== target.selectionEnd;
                };
                replaceFullWidthChars = function (str) {
                    var char, chars, fullWidth, halfWidth, i, idx, len, value;
                    if (str == null) {
                        str = '';
                    }
                    fullWidth = '\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19';
                    halfWidth = '0123456789';
                    value = '';
                    chars = str.split('');
                    for (i = 0, len = chars.length; i < len; i++) {
                        char = chars[i];
                        idx = fullWidth.indexOf(char);
                        if (idx > -1) {
                            char = halfWidth[idx];
                        }
                        value += char;
                    }
                    return value;
                };
                reFormatCardNumber = function (e) {
                    var cursor;
                    cursor = _getCaretPos(e.target);
                    e.target.value = payform.formatCardNumber(e.target.value);
                    if ((cursor != null) && e.type !== 'change') {
                        return e.target.setSelectionRange(cursor, cursor);
                    }
                };
                formatCardNumber = function (e) {
                    var card, cursor, digit, length, re, upperLength, value;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    value = e.target.value;
                    card = cardFromNumber(value + digit);
                    length = (value.replace(/\D/g, '') + digit).length;
                    upperLength = 16;
                    if (card) {
                        upperLength = card.length[card.length.length - 1];
                    }
                    if (length >= upperLength) {
                        return;
                    }
                    cursor = _getCaretPos(e.target);
                    if (cursor && cursor !== value.length) {
                        return;
                    }
                    if (card && card.type === 'amex') {
                        re = /^(\d{4}|\d{4}\s\d{6})$/;
                    } else {
                        re = /(?:^|\s)(\d{4})$/;
                    }
                    if (re.test(value)) {
                        e.preventDefault();
                        return setTimeout(function () {
                            return e.target.value = value + " " + digit;
                        });
                    } else if (re.test(value + digit)) {
                        e.preventDefault();
                        return setTimeout(function () {
                            return e.target.value = (value + digit) + " ";
                        });
                    }
                };
                formatBackCardNumber = function (e) {
                    var cursor, value;
                    value = e.target.value;
                    if (e.which !== 8) {
                        return;
                    }
                    cursor = _getCaretPos(e.target);
                    if (cursor && cursor !== value.length) {
                        return;
                    }
                    if (/\d\s$/.test(value)) {
                        e.preventDefault();
                        return setTimeout(function () {
                            return e.target.value = value.replace(/\d\s$/, '');
                        });
                    } else if (/\s\d?$/.test(value)) {
                        e.preventDefault();
                        return setTimeout(function () {
                            return e.target.value = value.replace(/\d$/, '');
                        });
                    }
                };
                reFormatExpiry = function (e) {
                    var cursor;
                    cursor = _getCaretPos(e.target);
                    e.target.value = payform.formatCardExpiry(e.target.value);
                    if ((cursor != null) && e.type !== 'change') {
                        return e.target.setSelectionRange(cursor, cursor);
                    }
                };
                formatCardExpiry = function (e) {
                    var digit, val;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    val = e.target.value + digit;
                    if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
                        e.preventDefault();
                        return setTimeout(function () {
                            return e.target.value = "0" + val + " / ";
                        });
                    } else if (/^\d\d$/.test(val)) {
                        e.preventDefault();
                        return setTimeout(function () {
                            return e.target.value = val + " / ";
                        });
                    }
                };
                formatForwardExpiry = function (e) {
                    var digit, val;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    val = e.target.value;
                    if (/^\d\d$/.test(val)) {
                        return e.target.value = val + " / ";
                    }
                };
                formatForwardSlashAndSpace = function (e) {
                    var val, which;
                    which = String.fromCharCode(e.which);
                    if (!(which === '/' || which === ' ')) {
                        return;
                    }
                    val = e.target.value;
                    if (/^\d$/.test(val) && val !== '0') {
                        return e.target.value = "0" + val + " / ";
                    }
                };
                formatBackExpiry = function (e) {
                    var cursor, value;
                    value = e.target.value;
                    if (e.which !== 8) {
                        return;
                    }
                    cursor = _getCaretPos(e.target);
                    if (cursor && cursor !== value.length) {
                        return;
                    }
                    if (/\d\s\/\s$/.test(value)) {
                        e.preventDefault();
                        return setTimeout(function () {
                            return e.target.value = value.replace(/\d\s\/\s$/, '');
                        });
                    }
                };
                reFormatCVC = function (e) {
                    var cursor;
                    cursor = _getCaretPos(e.target);
                    e.target.value = replaceFullWidthChars(e.target.value).replace(/\D/g, '').slice(0, 4);
                    if ((cursor != null) && e.type !== 'change') {
                        return e.target.setSelectionRange(cursor, cursor);
                    }
                };
                restrictNumeric = function (e) {
                    var input;
                    if (e.metaKey || e.ctrlKey) {
                        return;
                    }
                    if (e.which === 0) {
                        return;
                    }
                    if (e.which < 33) {
                        return;
                    }
                    input = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(input)) {
                        return e.preventDefault();
                    }
                };
                restrictCardNumber = function (e) {
                    var card, digit, value;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    if (hasTextSelected(e.target)) {
                        return;
                    }
                    value = (e.target.value + digit).replace(/\D/g, '');
                    card = cardFromNumber(value);
                    if (card && value.length > card.length[card.length.length - 1]) {
                        return e.preventDefault();
                    } else if (value.length > 16) {
                        return e.preventDefault();
                    }
                };
                restrictExpiry = function (e) {
                    var digit, value;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    if (hasTextSelected(e.target)) {
                        return;
                    }
                    value = e.target.value + digit;
                    value = value.replace(/\D/g, '');
                    if (value.length > 6) {
                        return e.preventDefault();
                    }
                };
                restrictCVC = function (e) {
                    var digit, val;
                    digit = String.fromCharCode(e.which);
                    if (!/^\d+$/.test(digit)) {
                        return;
                    }
                    if (hasTextSelected(e.target)) {
                        return;
                    }
                    val = e.target.value + digit;
                    if (val.length > 4) {
                        return e.preventDefault();
                    }
                };
                payform.cvcInput = function (input) {
                    _on(input, 'keypress', restrictNumeric);
                    _on(input, 'keypress', restrictCVC);
                    _on(input, 'paste', reFormatCVC);
                    _on(input, 'change', reFormatCVC);
                    return _on(input, 'input', reFormatCVC);
                };
                payform.expiryInput = function (input) {
                    _on(input, 'keypress', restrictNumeric);
                    _on(input, 'keypress', restrictExpiry);
                    _on(input, 'keypress', formatCardExpiry);
                    _on(input, 'keypress', formatForwardSlashAndSpace);
                    _on(input, 'keypress', formatForwardExpiry);
                    _on(input, 'keydown', formatBackExpiry);
                    _on(input, 'change', reFormatExpiry);
                    return _on(input, 'input', reFormatExpiry);
                };
                payform.cardNumberInput = function (input) {
                    _on(input, 'keypress', restrictNumeric);
                    _on(input, 'keypress', restrictCardNumber);
                    _on(input, 'keypress', formatCardNumber);
                    _on(input, 'keydown', formatBackCardNumber);
                    _on(input, 'paste', reFormatCardNumber);
                    _on(input, 'change', reFormatCardNumber);
                    return _on(input, 'input', reFormatCardNumber);
                };
                payform.numericInput = function (input) {
                    _on(input, 'keypress', restrictNumeric);
                    _on(input, 'paste', restrictNumeric);
                    _on(input, 'change', restrictNumeric);
                    return _on(input, 'input', restrictNumeric);
                };
                payform.parseCardExpiry = function (value) {
                    var month, prefix, ref, year;
                    value = value.replace(/\s/g, '');
                    ref = value.split('/', 2), month = ref[0], year = ref[1];
                    if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
                        prefix = (new Date).getFullYear();
                        prefix = prefix.toString().slice(0, 2);
                        year = prefix + year;
                    }
                    month = parseInt(month, 10);
                    year = parseInt(year, 10);
                    return {
                        month: month,
                        year: year
                    };
                };
                payform.validateCardNumber = function (num) {
                    var card, ref;
                    num = (num + '').replace(/\s+|-/g, '');
                    if (!/^\d+$/.test(num)) {
                        return false;
                    }
                    card = cardFromNumber(num);
                    if (!card) {
                        return false;
                    }
                    return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
                };
                payform.validateCardExpiry = function (month, year) {
                    var currentTime, expiry, ref;
                    if (typeof month === 'object' && 'month' in month) {
                        ref = month, month = ref.month, year = ref.year;
                    }
                    if (!(month && year)) {
                        return false;
                    }
                    month = String(month).trim();
                    year = String(year).trim();
                    if (!/^\d+$/.test(month)) {
                        return false;
                    }
                    if (!/^\d+$/.test(year)) {
                        return false;
                    }
                    if (!((1 <= month && month <= 12))) {
                        return false;
                    }
                    if (year.length === 2) {
                        if (year < 70) {
                            year = "20" + year;
                        } else {
                            year = "19" + year;
                        }
                    }
                    if (year.length !== 4) {
                        return false;
                    }
                    expiry = new Date(year, month);
                    currentTime = new Date;
                    expiry.setMonth(expiry.getMonth() - 1);
                    expiry.setMonth(expiry.getMonth() + 1, 1);
                    return expiry > currentTime;
                };
                payform.validateCardCVC = function (cvc, type) {
                    var card, ref;
                    cvc = String(cvc).trim();
                    if (!/^\d+$/.test(cvc)) {
                        return false;
                    }
                    card = cardFromType(type);
                    if (card != null) {
                        return ref = cvc.length, indexOf.call(card.cvcLength, ref) >= 0;
                    } else {
                        return cvc.length >= 3 && cvc.length <= 4;
                    }
                };
                payform.parseCardType = function (num) {
                    var ref;
                    if (!num) {
                        return null;
                    }
                    return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
                };
                payform.formatCardNumber = function (num) {
                    var card, groups, ref, upperLength;
                    num = replaceFullWidthChars(num);
                    num = num.replace(/\D/g, '');
                    card = cardFromNumber(num);
                    if (!card) {
                        return num;
                    }
                    upperLength = card.length[card.length.length - 1];
                    num = num.slice(0, upperLength);
                    if (card.format.global) {
                        return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
                    } else {
                        groups = card.format.exec(num);
                        if (groups == null) {
                            return;
                        }
                        groups.shift();
                        groups = groups.filter(Boolean);
                        return groups.join(' ');
                    }
                };
                payform.formatCardExpiry = function (expiry) {
                    var mon, parts, sep, year;
                    expiry = replaceFullWidthChars(expiry);
                    parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);
                    if (!parts) {
                        return '';
                    }
                    mon = parts[1] || '';
                    sep = parts[2] || '';
                    year = parts[3] || '';
                    if (year.length > 0) {
                        sep = ' / ';
                    } else if (sep === ' /') {
                        mon = mon.substring(0, 1);
                        sep = '';
                    } else if (mon.length === 2 || sep.length > 0) {
                        sep = ' / ';
                    } else if (mon.length === 1 && (mon !== '0' && mon !== '1')) {
                        mon = "0" + mon;
                        sep = ' / ';
                    }
                    return mon + sep + year;
                };
                return payform;
            });

        }).call(this);
    }

    private credit;
    private doc:any = document;

    public validateCardNumber(cardNumber):boolean {
        return this.credit.validateCardNumber(cardNumber);
    }

    public validateCardExpiry(month, year):boolean {
        return this.credit.validateCardExpiry(month, year);
    }

    public validateCardCVC(cvc, type):boolean {
        return this.credit.validateCardCVC(cvc, type);
    }
    
    public parseCardType(cardNumber):boolean {
        return this.credit.parseCardType(cardNumber);
    }

    public parseCardExpiry(value):boolean {
        return this.credit.parseCardExpiry(value);
    }

    public formatCardNumber(value):boolean {
        return this.credit.formatCardNumber(value);
    }

    public formatCardExpiry(expiry):boolean {
        var result = this.credit.formatCardExpiry(expiry);
        return result;
    }
}