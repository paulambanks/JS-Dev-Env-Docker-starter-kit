// An example of a passing test. Write your tests here.
import { expect } from 'chai';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => { // eslint-disable-line
  it('should say hello', (done) => { // eslint-disable-line
    const options = {}
    JSDOM.fromFile('./src/index.html', options).then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('Hello World!')
      done()
    }).catch(done)
  })
})
