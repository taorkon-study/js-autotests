import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Function works incorrectly.');
}

if (capitalize('') !== '') {
  throw new Error('Function works incorrectly.');
}

console.log('All tests passed');
