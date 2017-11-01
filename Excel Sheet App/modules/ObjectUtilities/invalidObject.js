/*
 * This module checks JSON objects for undefined,null,empty
 * returns true if keys of two arg JSONn objects are same else false
 * Author : Rohit Vadje 
 * Copyright @ smartdev
 */
var _ = require('./node_modules/lodash');
exports.emptyObject = function compareKeys(o) {
	return _.isNaN(o) || _.isNull(o) || _.isUndefined(o);
}
