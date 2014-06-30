var preferences = require('sdk/preferences/service');

var key = 'layout.css.visited_links_enabled';
var value;

exports.main = function() {
	value = preferences.get(key);
	preferences.set(key, false);
}

exports.onUnload = function() {
	preferences.set(key, value);
}
