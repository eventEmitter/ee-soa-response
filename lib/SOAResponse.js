!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, stream 		= require('stream')
		, StatusCodes 	= require('./StatusCodes');


	var SOAResponse = module.exports = new Class({
		inherits: stream.PassThrough

		, statusCodes: Class(new StatusCodes()).Enumerable()


		, init: function(options) {
	       	stream.PassThrough.call(this, {
	           	objectMode: true
	       	});
		}


		, send: function(status, content){
			if (!this.statusCodes.isValid(status)) throw new Error('Invalid status «'+status+'»!');
			this.status = status;

			process.nextTick(function(){
				this.emit('end', this.status, content);
			}.bind(this));

			return this;
	    }

	});

	SOAResponse.statusCodes = new StatusCodes();
}();