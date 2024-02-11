"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var try_thing_1 = require("try-thing");
var res = (0, try_thing_1.greet)(5, 8);
console.log('RES___', res);
// Will throw error even in js file as in module we have added decorator sealed.
// Object.defineProperty(BugReport.prototype, 'test', {
//     value: 42,
//     enumerable: true
// });
var bugR = new try_thing_1.BugReport('test');
// bugR.ttt = 99;  while run ts-node src/app.ts TSError: ⨯ Unable to compile TypeScript: src/app.ts:20:6 - error TS2339: Property 'ttt' does not exist on type 'BugReport'.
// while tsc src/app.ts also error due to sealed decorator in package
// console.log('TEST___________', (bugR as any).test) // for test js, otherwise typescript will not allow even compile even without sealed as test was not added to type
var TestR = /** @class */ (function () {
    function TestR() {
        this.a = 55;
    }
    TestR = __decorate([
        try_thing_1.sealed
    ], TestR);
    return TestR;
}());
