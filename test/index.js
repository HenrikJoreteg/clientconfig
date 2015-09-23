var test = require('tape');

GLOBAL.document = {
    cookie: void 0
};

test('getting the `config` cookie when it is one of many cookies, some similarly named', function (t) {

    t.plan(2);
    
    var configObjStr = JSON.stringify({
		"stringKey": "stringVal2",
		"numKey": 1234,
		"boolKey": false,
		"arrKey": [ "item2" ],
		"objKey": { "someKey2": "someVal2" },
		"dateKey2": new Date()
	});

    document.cookie = 'myconfig=someval;yourconfig=anotherval;config=' + configObjStr + ';name3=val3';
    var config = require('../clientconfig');

    t.equal(config.stringKey, 'stringVal2');
    t.equal(config.numKey, 1234);

});