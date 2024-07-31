CURL 备忘
===

计算请求时的各个响应时间
---

<!--rehype:body-class=cols-1-->
### curl
```bash preview
curl  -o /dev/null -s \
    -w %{time_namelookup}::%{time_connect}::%{time_starttransfer}::%{time_total}::%{speed_download}"\n" \
    --data-binary @req.dat https://www.baidu.com

# 参数说明
-o /dev/null: 将请求的输出重定向到 /dev/null，即丢弃输出。
-s: 静默模式，抑制传输期间的进度条和其他噪音。
-w: 指定输出的格式字符串，在请求完成后打印该字符串。
    %{time_namelookup}: 表示完成域名查找所需的时间（秒）。
    %{time_connect}: 表示建立连接所需的时间（秒）。
    %{time_starttransfer}: 表示接收到第一个字节之前所需的时间（秒）。
    %{time_total}: 表示总的传输时间（秒）。
    %{speed_download}: 表示平均下载速度（每秒字节数）。
    "\\n": 在格式化输出的末尾添加换行符。
--data-binary @req.dat: 发送文件 req.dat 的二进制内容作为请求体。
https://www.baidu.com: 发送请求的目标 URL。

```


### httpstat
```bash preview
httpstat baidu.com

# 参数说明
Connected to 110.242.68.66:443

HTTP/1.1 302 Moved Temporarily
Server: bfe/1.0.8.18
Content-Length: 161
Content-Type: text/html
Date: Fri, 26 Jul 2024 09:35:01 GMT
Location: http://www.baidu.com/
Connection: keep-alive

  DNS Lookup   TCP Connection   TLS Handshake   Server Processing   Content Transfer
[     53ms  |          48ms  |        115ms  |             53ms  |             0ms  ]
            |                |               |                   |                  |
   namelookup:53ms           |               |                   |                  |
                       connect:101ms         |                   |                  |
                                   pretransfer:216ms             |                  |
                                                     starttransfer:270ms            |
                                                                                total:270ms   

```
