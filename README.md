# ee-soa-response

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/ee-soa-response.svg)](https://greenkeeper.io/)

ee SOA Response class

## installation

    npm install ee-soa-response

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-response.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-response)

## usage

    var SOAResponse = require('ee-soa-response');

    var res = new SOAResponse();

    res.on('end', function(status, data){

    });


### setHeader method

you may set headers using the key=value pair method
    
    res.setHeader('discovery', 'discovered');

### getHeader method

you may read headers from a response
    
    var val = res.setHeader('discovery');

### setHeader method

you may test if a response has a header
    
    var hasHEader = res.hasHeader('discovery');
    

## Status Codes

      OK                        : 1   // 200
    , CREATED                   : 2   // 201
    , ACCEPTED                  : 202 // 202
    , NO_CONTENT                : 204 // 204

    , TARGET_MOVED              : 20  // 301
    , TARGET_FOUND              : 21  // 302
    , SEE_OTHER                 : 303 // 303
    , TARGET_NOT_MODIFIED       : 22  // 304
    , TARGET_NOT_FOUND          : 26  // 404
    , TARGET_GONE               : 29  // 410

    , CONFLICT                  : 80  //409, conflict, resource extsts already

    , ACCESS_MALFORMED          : 23  // 400
    , ACCESS_UNAUTHORIZED       : 24  // 401
    , ACCESS_FORBIDDEN          : 25  // 403
    , ACCESS_LIMIT_EXCEEDED     : 32  // 429 - request limit

    , FORMAT_UNAVAILABLE        : 28  // 406 - not acceptable, we cannot deliver the requested accept type
    , BODY_TOO_LARGE            : 30  // 413

    , INVALID_ACTION            : 27  // 405 - method not allowed
    , INVALID_RANGE             : 31  // 416
    , INVALID_SELECTION         : 33  // 460 - selection is not valid
    , INVALID_FILTER            : 34  // 461 - filter is not valid
    , INVALID_ORDER             : 35  // 462 - ordering is not valid
    , INVALID_API_VERSION       : 36  // 463 - api version is not valid

    , SERVICE_EXCEPTION         : 37  // 500
    , NOT_IMPLEMENTED           : 501 // 501
    , SERVICE_UNAVAILABLE       : 38  // 503

    , TRANSPORT_NOT_AVAILABLE   : 39  // no http equivalent