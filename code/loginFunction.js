var http = require('http');
var endPoint = require('apiEndpoints');
var config = require('config');
var console = require('console');
const oauthServiceName = config.get('oauth.servicename');

function loginFunction($vivContext) {
  try {
    var params = {
      serviceName: oauthServiceName,
      accessToken: $vivContext.accessToken,
      expiresIn: 200
    }

    var options = {
      headers: {
        "Content-Type": "application/json"
      },
      format: "json"
    }

    var res = http.oauthPostUrl(endPoint.loginUrl, params, options);

    // console.log(res);

    const headers = {
      'X-Auth-Token': res.data.authToken,
      'X-User-Id': res.data.userId,
    };

    if(res.success != true){
      return;
    }

    return headers;
  } catch (err) {
    console.log(err);
  }
}

module.exports.loginFunction = loginFunction;
