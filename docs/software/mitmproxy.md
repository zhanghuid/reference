mitmproxy
===
简明手册

## MacOS 安装
```bash
brew install --cask mitmproxy --verbose
```

## 证书
```
~/.mitmproxy/
```

## 例子
```python

# -*- coding:utf-8 -*-

from mitmproxy import ctx
# from save_mongo import save_task
import json

def response(flow):
    """获取粉丝数据"""
    print("debug------")
    urls = [
        "xxx/use",
        "/yyyy",
        "/eeee",
        "/ddd",
        "/cccc",
    ]

    for u in urls:
        if  u in flow.request.url:
            # 修复状态码
            if flow.response.status_code == 400:
                flow.response.status_code = 200

            # 修复 JSON 结构
            data = {
                "code": 200,
                "message": "success"
            }

            # 返回修复后的响应
            flow.response.content = json.dumps(data).encode('utf-8')
            return response

```