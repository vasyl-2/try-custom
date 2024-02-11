// either import of bottom works
// import * as my from "try-thing";

import { BugReport, greet, sealed, BugReportTwo } from "try-thing";
import { useGenericMixin, useScale } from "./mixins/mixins";

const res = greet(5, 8);
//======================================================================================
console.log('RES___', res);

const bRTwo = new BugReportTwo('test');

// reportingURL_____________ BugReportTwo {
//     type: 'report',
//         title: 'test',
//         reportingURL: 'http://www...'
// }

console.log('reportingURL_____________', bRTwo);

// ====================================================================================
// Will throw error even in js file as in module we have added decorator sealed.
// Object.defineProperty(BugReport.prototype, 'test', {
//     value: 42,
//     enumerable: true
// });

// console.log('TEST___________', (bugR as any).test) // for test js, otherwise typescript will not allow even compile even without sealed as test was not added to type

useScale();

useGenericMixin();
// @sealed
// class TestR {
//     a = 55;
// }

