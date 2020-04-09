const { config } = require("./setup_config");

const slsConfig = {
  service: config.serviceName, // uportlandia
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: config.region
  },
  custom: {
    "serverless-offline": {
      port: 3003
    },
    output: {
      file: "stack.json"
    }
  },
  plugins: [
    "serverless-express",
    "serverless-scriptable-plugin",
    "serverless-plugin-include-dependencies",
    "serverless-offline",
    "serverless-stack-output"
  ],
  functions: {
    server: {
      handler: "src/server.handler",
      timeout: 12,
      events: [{
        http: {
          method: "ANY",
          path: "/{proxy+}",
          cors: config.cors
        }
      }]
    }
  },
  package: {
    exclude: [ "./**" ],
    include: [ "src/server.js" ]
  }
};

module.exports = slsConfig;
