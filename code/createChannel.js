var {
  loginFunction
} = require('./loginFunction');
var console = require('console');
var http = require('http');
var endPoint = require('apiEndpoints');

module.exports.function = function createChannel($vivContext,channelName) {
  try{
  
  const headers = loginFunction($vivContext);

  var params = {
			name: channelName,
	}

  var options = {
    headers: headers,
    format: "json"
  }

  var res = http.oauthPostUrl(endPoint.createchannelurl, params, options);
  console.log(res);

  if(res.success == true){
    return 'Channel ' + channelName + ' created successfully';
  } else {
    return 'Channel Creation Failure';
  }
  
  } catch(err){
    console.log(err);
    return 'Channel Creation Failure';
  }
}
