"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speakLikeSloth3 = void 0;
var tslib_1 = require("tslib");
function sleep(ms) {
    return new Promise(function (res) {
        setTimeout(res, ms);
    });
}
function getItemsReallySlowly(items) {
    return tslib_1.__asyncGenerator(this, arguments, function getItemsReallySlowly_1() {
        var items_1, items_1_1, item, e_1_1;
        var e_1, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, 8, 9]);
                    items_1 = tslib_1.__values(items), items_1_1 = items_1.next();
                    _b.label = 1;
                case 1:
                    if (!!items_1_1.done) return [3 /*break*/, 6];
                    item = items_1_1.value;
                    return [4 /*yield*/, tslib_1.__await(sleep(1000))];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, tslib_1.__await(item)];
                case 3: return [4 /*yield*/, _b.sent()];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    items_1_1 = items_1.next();
                    return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function speakLikeSloth3(items) {
    var e_2, _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _b, _c, item, e_2_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 11]);
                    _b = tslib_1.__asyncValues(getItemsReallySlowly(items));
                    _d.label = 1;
                case 1: return [4 /*yield*/, _b.next()];
                case 2:
                    if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 4];
                    item = _c.value;
                    console.log(item);
                    _d.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 11];
                case 5:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 11];
                case 6:
                    _d.trys.push([6, , 9, 10]);
                    if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 8];
                    return [4 /*yield*/, _a.call(_b)];
                case 7:
                    _d.sent();
                    _d.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 10: return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.speakLikeSloth3 = speakLikeSloth3;
//# sourceMappingURL=module-3.js.map