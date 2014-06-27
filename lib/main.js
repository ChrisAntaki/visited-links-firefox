var preferences = require("sdk/preferences/service");

exports.main = function() {
    preferences.set('layout.css.visited_links_enabled', false);
}

exports.onUnload = function() {
    preferences.reset('layout.css.visited_links_enabled');
}
