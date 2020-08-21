var child_process = require('child_process');

var PromtHere = function() {
	return this;
}

PromtHere.prototype.open = function(dir) {
	var cmd = null;
	var dir = '"'+dir+'"';
	switch(process.platform) {
	    case "win32":
	        cmd = [dir, '/D', dir];
	        break;
	    case "win64":
	        cmd = [dir, '/D', dir];
	        break;
	    default:
	        throw new Error(process.platform + " is not supported. Please CONTRIBUTE at https://github.com/s-a/node-prompt-here.");
	}
	child_process.execFile('start', cmd);
};

module.exports = PromtHere;