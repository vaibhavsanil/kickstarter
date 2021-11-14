const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
// Remove the existing Buidl folder
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');
const output = solc.compile(source, 1).contracts;

// Build the  output directory for avi
fs.ensureDirSync(buildPath);
// console.log(output);
for (let contract in output) {
  try {
    fs.outputJSONSync(
      path.resolve(buildPath, contract.replace(':', '') + '.json'),
      output[contract]
    );
  } catch (error) {
    console.log(error);
  }

  // console.log(`The generation of JSON completed for ${contract}`);
}
