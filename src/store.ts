import Traceid from './index';
import { AsyncLocalStorage } from 'async_hooks';

const storage = new AsyncLocalStorage()

export function init(callback: () => any, start = '', end = '') {
    const traceid = `${start}${Traceid()}${end}`;
    return storage.run(traceid, callback);
}

export function get() {
    return storage.getStore();
}

export default {
    init,
    get,
};
