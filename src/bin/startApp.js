const {exec} = require('child_process');
const ngrokSimple = require('ngrok_simple');
const fs = require('fs');

startApp();
async function startApp() {
  console.log('Iniciando...');
  const apiProccess = startAndGetApiProccess();
  await checkifApiIsReady(apiProccess);
  const apiInfo = await tunnelateAndGetApiInfo();
  writeApiInfo(apiInfo);
  startReactHost();
}

function writeApiInfo(apiInfo) {
  fs.writeFile('./src/services/tunnels/tunnelInfo.json', JSON.stringify(apiInfo), err => {
    if (err) throw err;
    console.log('Urls escritas com sucesso');
  });
}

function startAndGetApiProccess() {
  const apiProccess = exec('startApi', {cwd: __dirname}, (err, stdout, stderr) => {
    if (err) throw new Error(stderr);
    console.log(stdout);
  });

  return apiProccess;
}
function startReactHost() {
  const ReactProccess = exec('startReactHost', {cwd: __dirname}, (err, stdout, stderr) => {
    if (err) return stderr;
    console.log(stdout);
  });

  ReactProccess.stdout.on('data', data => {
    console.log(data);
  });
}

async function tunnelateAndGetApiInfo() {
  return await ngrokSimple.connect({region: 'jp', proto: 'http', addr: 3100});
}
async function checkifApiIsReady(apiProccess) {
  return new Promise((resolve, reject) => {
    apiProccess.stdout.on('data', watchDataReceived);
    apiProccess.stdout.on('error', err => console.error(err));
    apiProccess.on('error', console.error);

    function watchDataReceived(data) {
      data = data.toString();
      console.log(data);
      filterErrorConnect(data);
      filterSuccessConnect(data);
    }
    function filterSuccessConnect(data) {
      const regex = /Banco de dados conectado/i;
      const result = data.match(regex);
      if (result) resolve(result);
    }
    function filterErrorConnect(data) {
      const regex = /basanco de dados conectado/i;
      const result = data.match(regex);
      if (result) reject(result);
    }
  });
}
