"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var _b;
/**let/const*/
// eslint-disable-next-line prefer-const
var period = 60;
var baseUrl = 'http://localhost:8080';
/**object*/
var firstName = 'Igor';
var account = {
    firstName: firstName,
    getName: function () {
        return this.firstName;
    }
};
/**spread*/
var person = __assign({}, account);
var dates = [11, 12, 13];
/**destructoring */
var myName = account.firstName;
var _c = __read(dates, 1), firstDate = _c[0];
/**template string */
function userMessage(_a, myPerson) {
    var _b = __read(_a, 2), start = _b[0], end = _b[1];
    return "" + start + myPerson.firstName + end;
}
console.log(userMessage(__makeTemplateObject(["Good day, ", " !!"], ["Good day, ", " !!"]), person));
try {
    /**template string */
    for (var dates_1 = __values(dates), dates_1_1 = dates_1.next(); !dates_1_1.done; dates_1_1 = dates_1.next()) {
        var date = dates_1_1.value;
        console.log(date);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (dates_1_1 && !dates_1_1.done && (_a = dates_1.return)) _a.call(dates_1);
    }
    finally { if (e_1) throw e_1.error; }
}
/**arrow fn */
var sum = function (a, b) { return a + b; };
/**class */
var Point = /** @class */ (function () {
    function Point() {
        this.x = 1;
        this.y = 1;
    }
    Point.prototype.sum = function () {
        return 1;
    };
    return Point;
}());
/** optional chaining**/
var user = {};
var male = (_b = user === null || user === void 0 ? void 0 : user.info) === null || _b === void 0 ? void 0 : _b.male;
/** ?? **/
var admin;
var u = admin !== null && admin !== void 0 ? admin : account;
//# sourceMappingURL=features.js.map