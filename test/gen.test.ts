import { expect } from 'chai';
import Traceid from '../src/index';

describe('traceid', function () {
    it('生成 traceid', async function () {
        const traceid = Traceid();
        expect(traceid).to.be.an('string');
    });
});

