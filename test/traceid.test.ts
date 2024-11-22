import { expect } from 'chai';
import Traceid from '../src/index';
import store from '../src/store';

describe('traceid', function () {
    it('生成 traceid', async function () {
        const traceid = Traceid();
        expect(traceid).to.be.an('string');
    });

    it('异步本地存储', function (done) {
        store.init({ test: true }, () => {
            const traceid = store.get('traceid');
            expect(traceid).to.be.an('string');
            const test = store.get('test');
            expect(test).to.equal(true);
            const data = store.get();
            expect(data.traceid).to.be.an('string');
            expect(data.test).to.equal(true);
            done();
        });
    });

    it('自定义traceid', function (done) {
        store.init({ traceid: '123' }, () => {
            const traceid = store.get('traceid');
            expect(traceid).to.equal('123');
            done();
        });
    });
});

