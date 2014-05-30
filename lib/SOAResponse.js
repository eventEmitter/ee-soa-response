!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, stream 		= require('stream')
		, type 			= require('ee-types')
		, StatusCodes 	= require('./StatusCodes');


	var statusCodes = new StatusCodes();


	var SOAResponse = module.exports = new Class({
		inherits: stream.PassThrough

		, statusCodes: Class(statusCodes).Enumerable()


		, init: function(options) {
	       	stream.PassThrough.call(this, {
	           	objectMode: true
	       	});

	       	Class.define(this, 'headers', Class({}).Enumerable());
		}


		, setHeader: function(name, value) {
			this.headers[name] = value;
			return this;
		}

		, getHeader: function(name) {
			return this.headers[name];
		}

		, hasHeader: function(name) {
			return !type.undefined(this.headers[name]);
		}


		, getMessage: statusCodes.getMessage.bind(statusCodes)


		, send: function(status, content){
			if (!this.statusCodes.isValid(status)) throw new Error('Invalid status «'+status+'»!');
			this.status = status;

			process.nextTick(function(){
				this.emit('end', this.status, content);
			}.bind(this));

			return this;
	    }

	});

	SOAResponse.statusCodes = statusCodes;
	SOAResponse.getMessage 	= statusCodes.getMessage.bind(statusCodes);
}();