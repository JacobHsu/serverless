# serverless

`$ yarn add serverless`

`./node_modules/.bin/sls`

npm [serverless](https://www.npmjs.com/package/serverless)

`$ npm install -g serverless`  
`$ serverless deploy -v`  

## serverless-offline

`$ yarn add serverless-express serverless-scriptable-plugin`  
`$ yarn add  serverless-plugin-include-dependencies  serverless-stack-output --dev`
`$ yarn add serverless-offline@^4.9.4 --dev`

`$ ./node_modules/.bin/sls offline -s stage`

Serverless: Starting Offline: stage/us-east-1.

Serverless: Routes for server:
Serverless: ANY /{proxy*}

Serverless: Offline listening on http://localhost:3003

http://localhost:3001/api/ping ok