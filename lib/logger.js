var log = function(message) {
	var color = {
		reset : 	"\u001B[0m",
		black : 	"\u001B[30m",
		red : 		"\u001B[31m",
		green : 	"\u001B[32m",
		yellow : 	"\u001B[33m",
		blue : 		"\u001B[34m",
		purple : 	"\u001B[35m",
		cyan : 		"\u001B[36m",
		white : 	"\u001B[37m"
	};

	var msg = message;
	return {
		debug : function()
		{
			console.log(color.reset + "[DEBUG] " + msg);
		},
		info : function()
		{
			console.log(color.blue + "[INFO] " + msg + color.reset);
		},
		error : function()
		{
			console.log(color.red + "[ERROR]" + msg + color.reset);
		},
		success : function()
		{
			console.log(color.green + "[SUCCESS]" + msg + color.reset );
		},
		custom : function(scolor)
		{
			console.log(scolor + msg, color.reset);
		}
	}
}

module.exports = log;
