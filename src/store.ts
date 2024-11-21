import Traceid from './index';
import { AsyncLocalStorage } from 'async_hooks';

const storage = new AsyncLocalStorage()

export function init(data: Record<string, any> = {}, callback: () => any, start = '', end = '') {
    data.traceid = `${start}${Traceid()}${end}`;
    return storage.run(data, callback);
}

export function get(key?: string): any {
    const data = storage.getStore();
    return key? data[key] : data;
}

export default {
    init,
    get,
};
