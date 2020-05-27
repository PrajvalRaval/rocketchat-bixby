var {
  loginFunction
} = require('./loginFunction');
var console = require('console');
var http = require('http');
var endPoint = require('apiEndpoints');

module.exports.function = function deleteChannel($vivContext,channelName) {
  try{
  
  const headers = loginFunction($vivContext);

  var params = {
			roomName: channelName,
	}

  var options = {
    headers: headers,
    format: "json"
  }

  var res = http.oauthPostUrl(endPoint.deletechannelurl, params, options);
  console.log(res);

  if(res.success == true){
    return 'Channel ' + channelName + ' deleted successfully';
  } else {
    return 'Channel Deletion Failure';
  }
  
  } catch(err){
    console.log(err);
    return 'Channel Deletion Failure';
  }
}
