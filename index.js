var f = require( 'false' );
var isUndefined = require( 'is-undefined' );
var isNumber = require( 'is-number' );
var isString = require( 'is-string' );
var { _return, functions } = require( 'returndotjs/safe' );
var zero = require( 'integer-value-positive-zero' );

global.jQuery = require( 'jquery' )
require( 'jquery-basic-arithmetic-plugin' )

functions.iszero = function( thing ) {
	if (isUndefined( thing )) {
		_return(f());
	} else {
		if (!isNumber( thing )) {
			_return(f());
		} else {
			if (isString( thing )) {
				_return(f());
			} else {
				_return(
					jQuery.equals(thing, zero()) &&
					thing === zero() &&
					thing === 0
				)
			}
		}
	}
};

module.exports = functions.iszero
