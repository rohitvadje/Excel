/*
 * This module compares whether keys from two JSON objects are matching or not
 * returns true if keys of two arg JSONn objects are same else false
 * Author : Rohit Vadje 
 * Copyright @ smartdev
 */

exports.objectKeysComparator = function compareKeys(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}