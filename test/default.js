
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var SOAResponse = require('../');



	describe('A SOAResponse', function(){
		it('should not throw when instantiated', function(){
			new SOAResponse();
		});

		it('should emit the end event when send is called', function(done){
			var response = new SOAResponse().send(SOAResponse.statusCodes.OK, 2);

			response.on('end', function(status, data){
				assert.equal(status, SOAResponse.statusCodes.OK);
				done();
			});

		});

		it('should not accept invalid status codes', function(){
			assert.throws(function(){
				new SOAResponse().send(SOAResponse.statusCodes.nope, 2);
			});
		});	

		it('should be able to store a header #1', function(){
			assert.equal(new SOAResponse().setHeader('discovery', 'discovered').getHeader('discovery'), 'discovered');
		});

		it('should be able to store a header #2', function(){
			assert.equal(new SOAResponse().setHeader('discovery', 'discovered').hasHeader('discovery'), true);
		});

		it('should be able to store a header #3', function(){
			assert.equal(new SOAResponse().setHeader('discovery', 'discovered').hasHeader('discoasvery'), false);
		});

		it('should be able to return the message for a code', function(){
			assert.equal(SOAResponse.getMessage(1), 'OK');
		});
	});
	