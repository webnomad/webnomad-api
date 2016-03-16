'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('spot service', () => {
  it('registered the spots service', () => {
    assert.ok(app.service('spots'));
  });
});
