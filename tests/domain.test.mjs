import test from 'node:test';
import assert from 'node:assert/strict';
import { sampleQuestions } from '../src/utils/quiz.ts';
test('sample questions without duplicates or changing the bank', () => {
  const bank = Array.from({ length: 100 }, (_, i) => i),
    copy = [...bank],
    sampled = sampleQuestions(bank, 8, () => 0.25);
  assert.equal(sampled.length, 8);
  assert.equal(new Set(sampled).size, 8);
  assert.deepEqual(bank, copy);
  assert.equal(sampleQuestions(bank, 200).length, 100);
});
