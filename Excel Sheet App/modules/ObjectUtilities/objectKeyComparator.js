/*
 * This module compares whether keys from two JSON objects are matching or not
 * returns true if keys of two arg JSONn objects are same else false
 * Author : Rohit Vadje 
 * Copyright @ smartdev
 */

exports.objectKeysComparator = function compareKeys(a, b) {
  return JSON.stringify(Object.keys(a).sort()) === JSON.stringify(Object.keys(b).sort());
}