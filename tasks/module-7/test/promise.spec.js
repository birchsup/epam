const { describe, it } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

const { promiseResolve, promiseReject, fullPromise, promisesChaining, getAnimals } = require('../promises');
const { asyncPromiseResolve, asyncPromiseReject, asyncPromiseAll } = require('../asyncAwait');

describe('Promises', () => {
  it('TASK-1: should create a promise that will be resolved', async () => {
    return promiseResolve().then(result => expect(result).to.equal('Resolved!'));
  });

  it('TASK-2: should create a promise that will be rejected', async () => {
    try {
      expect(await promiseReject(), 'You promise is not rejected').not.to.equal('Rejected!');
    } catch (e) {
      expect(e).to.equal('Rejected!');
    }
  });

  it('TASK-3: should resolve when param === true with "Resolved!" string', () => {
    return fullPromise(true).should.eventually.become('Resolved!');
  });

  it('TASK-3: should reject when param === false with "Rejected!" string', () => {
    return fullPromise(false).should.be.rejectedWith('Rejected!');
  });

  it('TASK-4: should chain promises', async () => {
    return promisesChaining().then(result => expect(result).to.equal('Promises chained'));
  });

  it('TASK-5: should return array of animals practicing Promise.all() method', async () => {
    return getAnimals().then(results => {
      expect(results).to.have.members(['dogs', 'cats', 'birds']);
    });
  });
});

describe('Async/await syntax', () => {
  it('TASK-1: should resolve the promise using async/await syntax', async () => {
    const result = await asyncPromiseResolve();
    expect(result).to.equal('Resolved! with async await');
  });

  it('TASK-2: should reject the promise using async/await syntax', async () => {
    const result = await asyncPromiseReject();
    expect(result).to.equal('Rejected! with async await');
  });

  it('TASK-3: should return array of animals using async/await syntax', async () => {
    const result = await asyncPromiseAll();
    expect(result).to.have.members(['dogs', 'cats', 'birds']);
  });
});
