
const getLocalIp = require("../tasks/getLocalIp.js")
const devHost = getLocalIp();
const devPort = 7710; 

module.exports = {
  env: 'dev',
  // remoteHost: `http://${devHost}:${devPort}`,
  mfRemoteMap: {
    remote_libs: {
      protocol: `http:`,
      hostname: devHost,
      port: 7701,
      path: '',
    },
    remote_vue_applications: {
      protocol: `http:`,
      hostname: devHost,
      port: 7704,
      path: '',
    },
  },
  
  // 以下为Dev环境独有字段 
  devHost,
  devPort,
}


