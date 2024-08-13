tcpdump
===
tcpdump 简明手册

## tcpdump 使用 -- 选项类

| 选项  | 示例                 | 说明                                                      |
| ----- | -------------------- | --------------------------------------------------------- |
| `-i`  | tcpdump -i eth0      | 指定网络接口，默认是 0 号接口（如 eth0）,any 表示所有接口 |
| `-nn` | tcpdump -nn          | 不解析 IP 地址和端口号的名称                              |
| `-c`  | tcpdump -c 5         | 限制要抓取的网络包的个数                                  |
| `-w`  | tcpdump -w file.pcap | 保持到文件中，文件名通常以 .pcap 为后缀                   |
<!--rehype:className=show-header code-nowrap-->

## tcpdump 使用 -- 过滤表达式类

| 选项                           | 示例                                       | 说明              |
| ------------------------------ | ------------------------------------------ | ----------------- |
| `host、src host、dst host`     | tcpdump -nn host 192.168.1.100             | 主机过滤          |
| `port、 src port、dst port`    | tcpdump -nn port 80                        | 端口过滤          |
| `ip、ip6、arp、tcp、udp、icmp` | tcpdump -nn tcp                            | 协议过滤          |
| `and、or、not`                 | tcpdump -nn host 192.168.1.100 and port 80 | 逻辑表达式        |
| `tcp[tcoflages]`               | tcpdump -nn "tcp[tcpflags] & tcp-syn != 0" | 特定状态的 TCP 包 |
<!--rehype:className=show-header code-nowrap-->



## see more
[实战！我用“大白鲨”让你看见 TCP](https://mp.weixin.qq.com/s/n1O4zrbt1nnF3GKhHFPA5g)