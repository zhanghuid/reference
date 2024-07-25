CURL 备忘
===

## 计算请求时的各个响应时间
<!--rehype:body-cl$$

$$ass=cols-5-->
### 
```bash
curl  -o /dev/null -s \
    -w %{time_namelookup}::%{time_connect}::%{time_starttransfer}::%{time_total}::%{speed_download}"\n" \
    --data-binary @req.dat https://www.baidu.com
```$$