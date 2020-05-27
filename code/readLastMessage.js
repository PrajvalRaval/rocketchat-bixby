var {
  loginFunction
} = require('./loginFunction');
var console = require('console');
var http = require('http');
var endPoint = require('apiEndpoints');

module.exports.function = function readLastMessage($vivContext,channelName) {
  try{
    const headers = loginFunction($vivContext);

  var options = {
    headers: headers,
    format: "json"
  }

  var res = http.oauthGetUrl(endPoint.channelmessageurl + channelName, options);
  console.log(res);

  if(res.success == true){
    return res.messages[0].msg;
  } else {
    return 'Read Message Failure';
  }

  } catch(err){
    console.log(err);
    return 'Read Message Failure';
  }
  
}
