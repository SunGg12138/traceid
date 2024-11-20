import { expect } from 'chai';
import Traceid from '../src/index';
import store from '../src/store';

describe('traceid', function () {
    it('生成 traceid', async function () {
        const traceid = Traceid();
        expect(traceid).to.be.an('string');
    });

    it('异步本地存储', function (done) {
       store.init(() => {
            const traceid = store.get();
            expect(traceid).to.be.an('string');
            done();
        });
    });
});

