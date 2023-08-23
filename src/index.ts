import * as ip from 'ip';

// 自增序列
let index = 1000;
const pid = process.pid;
const localIp = ip.address();
const localIp16 = ip.toLong(localIp).toString(16);

export default function gen (): string {
    const now = Date.now();
    const traceid = localIp16 + now + index + pid;
    if (index >= 9000)
        index = 1000;
    else
        index++;
    return traceid;
}
