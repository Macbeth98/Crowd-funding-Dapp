const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//Delete the build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts; //returns two contarcts CF and C

fs.ensureDirSync(buildPath); //checking and creating a folder if it doesn't exist

//console.log(output);

for (let contract in output) {
  fs.outputJsonSync (
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
