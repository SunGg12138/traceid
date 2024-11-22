# traceid

生成程序当前请求栈的id

## 安装

```typescript
npm i node-traceid
```

## 直接生成traceid字符串

```typescript
import Traceid from 'node-traceid';

const traceid = Traceid();
```

## 异步本地存储

```typescript
import Traceid from 'node-traceid';
import store from 'node-traceid/dist/store';

store.init({ test: true }, () => {
    const traceid = store.get('traceid');
    // 当前调用栈的其它属性
    const test = store.get('test');
});
```
### 支持自定义traceid

```typescript
import Traceid from 'node-traceid';
import store from 'node-traceid/dist/store';

store.init({ traceid: '123' }, () => {
    const traceid = store.get('traceid');
    // traceid === '123'
});
```
