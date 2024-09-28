
var isZero = require('./');
var test = require('tape');

test('is zero', function(t) {
	t.ok(isZero(0));
	t.notOk(isZero(1));
	t.notOk(isZero(""));
	t.notOk(isZero("1"));
	t.notOk(isZero("0"));

	t.end();
});
