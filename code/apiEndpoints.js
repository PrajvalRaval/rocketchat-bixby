var config = require('config');

// Server URL Environment Variable

const serverUrl = config.get('server.url');

// REST API Endpoints

module.exports = {
  loginUrl: serverUrl + '/api/v1/login',
	meUrl: serverUrl + '/api/v1/me',
	channellisturl: serverUrl + '/api/v1/channels.list.joined',
	createchannelurl: serverUrl + '/api/v1/channels.create',
	deletechannelurl: serverUrl + '/api/v1/channels.delete',
	postmessageurl: serverUrl + '/api/v1/chat.postMessage',
	channelmessageurl: serverUrl + '/api/v1/channels.messages?roomName=',
	channelinfourl: serverUrl + '/api/v1/channels.info?roomName=',
	userinfourl: serverUrl + '/api/v1/users.info?username=',
	addallurl: serverUrl + '/api/v1/channels.addAll',
	makemoderatorurl: serverUrl + '/api/v1/channels.addModerator',
	addownerurl: serverUrl + '/api/v1/channels.addOwner',
	archivechannelurl: serverUrl + '/api/v1/channels.archive',
	counterurl: serverUrl + '/api/v1/channels.counters?roomName=',
	markasreadurl: serverUrl + '/api/v1/subscriptions.read',
	generatetokenurl: serverUrl + '/api/v1/users.generatePersonalAccessToken',
	removetokenurl: serverUrl + '/api/v1/users.removePersonalAccessToken',
	anonymousReadUrl: serverUrl + '/api/v1/channels.anonymousread?roomName=',
	creategroupurl: serverUrl + '/api/v1/groups.create',
	deletegroupurl: serverUrl + '/api/v1/groups.delete',
	groupinfourl: serverUrl + '/api/v1/groups.info?roomName=',
	addgroupmoderatorurl: serverUrl + '/api/v1/groups.addModerator',
	addgroupownerurl: serverUrl + '/api/v1/groups.addOwner',
	postmessageurl: serverUrl + '/api/v1/chat.postMessage',
	groupmessageurl: serverUrl + '/api/v1/groups.messages?roomId=',
	groupcounterurl: serverUrl + '/api/v1/groups.counters?roomId=',
	createimurl: serverUrl + '/api/v1/im.create',
};
