// either of bottom works
import * as my from "try-thing";

import {BugReport, greet, sealed} from "try-thing";


const res = greet(5, 8);

console.log('RES___', res);


// Will throw error even in js file as in module we have added decorator sealed.
// Object.defineProperty(BugReport.prototype, 'test', {
//     value: 42,
//     enumerable: true
// });

const bugR = new BugReport('test');

// bugR.ttt = 99;  while run ts-node src/app.ts TSError: ⨯ Unable to compile TypeScript: src/app.ts:20:6 - error TS2339: Property 'ttt' does not exist on type 'BugReport'.
// while tsc src/app.ts also error due to sealed decorator in package

// console.log('TEST___________', (bugR as any).test) // for test js, otherwise typescript will not allow even compile even without sealed as test was not added to type

@sealed
class TestR {
    a = 55;
}

