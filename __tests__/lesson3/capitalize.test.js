import { strict as assert } from 'node:assert';
import capitalize from '../../src/lesson3/capitalize.js';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

console.log('All tests passed');
