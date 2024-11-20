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

store.init(() => {
    const traceid = store.get();
    // 当前调用栈的traceid
});
```
