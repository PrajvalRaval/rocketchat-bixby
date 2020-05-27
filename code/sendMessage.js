var {
  loginFunction
} = require('./loginFunction');
var console = require('console');
var http = require('http');
var endPoint = require('apiEndpoints');

module.exports.function = function sendMessage($vivContext,textMessage,channelName) {
  try{
  
  const headers = loginFunction($vivContext);

  var params = {
			channel: channelName,
			text: textMessage,
	}

  var options = {
    headers: headers,
    format: "json"
  }

  var res = http.oauthPostUrl(endPoint.postmessageurl, params, options);
  console.log(res);

  if(res.success == true){
    return 'Message Sent Successfully';
  } else {
    return 'Message Sending Failure';
  }
  
  } catch(err){
    console.log(err);
    return 'Message Sending Failure';
  }
}
