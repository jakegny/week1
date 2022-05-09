const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/;

const verifierRegex = /contract Verifier/;

// let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", {
//   encoding: "utf-8",
// });
// let bumped = content.replace(solidityRegex, "pragma solidity ^0.8.0");
// bumped = bumped.replace(verifierRegex, "contract HelloWorldVerifier");

// fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
content = fs.readFileSync("./contracts/LessThan10Verifier.sol", {
  encoding: "utf-8",
});
bumped = content.replace(solidityRegex, "pragma solidity ^0.8.0");
bumped = bumped.replace(verifierRegex, "contract LessThan10Verifier");

fs.writeFileSync("./contracts/LessThan10Verifier.sol", bumped);

// content = fs.readFileSync("./contracts/_plonkLessThan10Verifier.sol", {
//   encoding: "utf-8",
// });
// bumped = content.replace(solidityRegex, "pragma solidity ^0.8.0");
// bumped = bumped.replace(verifierRegex, "contract _plonkLessThan10Verifier");

// fs.writeFileSync("./contracts/_plonkLessThan10Verifier.sol", bumped);
