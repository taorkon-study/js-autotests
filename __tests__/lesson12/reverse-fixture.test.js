import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import reverse from '../../src/lesson5/reverse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '..', '__fixtures__', 'lesson12', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse string from fixtures', () => {
  const before = readFile('before.txt');
  const after = readFile('after.txt');

  expect(reverse(before)).toEqual(after);
});
