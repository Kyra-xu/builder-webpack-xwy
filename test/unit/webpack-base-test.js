const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');
  console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('index/index.js') > -1, true);
    assert.equal(baseConfig.entry.search.indexOf('search/index.js') > -1, true);
  });
});
