var preferences = require('sdk/preferences/service');

var enabled = false;
var key = 'layout.css.visited_links_enabled';

exports.main = enable;
function enable() {
    enabled = true;
    preferences.set(key, false);
}

exports.onUnload = disable;
function disable() {
    enabled = false;
    preferences.reset(key);
}

// Toggle Button
var { ActionButton } = require('sdk/ui/button/action');
var button = ActionButton({
    id: 'toggle',
    label: 'Toggle Visited Links',
    icon: './monkey-vs.png',
    onClick: onClick
});

function onClick() {
    if (enabled) {
        button.icon = './monkey-vs-bw.png';
        disable();
    } else {
        button.icon = './monkey-vs.png';
        enable();
    }
}
