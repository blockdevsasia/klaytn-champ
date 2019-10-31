const fs = require('fs')

const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 700);
  });
}

function loadSessionEnv(envPath){
  const fs = require('fs')
  const dotenv = require('dotenv')

  const envDev = fs.readFileSync(envPath + '.env.dev', {encoding: 'utf-8'})
  const envSession = fs.readFileSync(envPath + ".env.session", {encoding: 'utf-8'})

  const envMerged = envDev + envSession
  const config = dotenv.parse(envMerged)

  for (const key in config){
    process.env[key.toUpperCase()] = config[key];
  }
}

function changeContractInEnv(envPath, newContractId){
  env = fs.readFileSync( envPath, {encoding: 'utf-8'})
  newEnv = env.replace(/CONTRACT_ID.*/g,'CONTRACT_ID=' + newContractId)
  fs.writeFile(envPath, newEnv, 'utf8', (error) => {if(error) console.error(error)})
}

module.exports = {wait1sec: wait, changeContractInEnv, loadSessionEnv}
