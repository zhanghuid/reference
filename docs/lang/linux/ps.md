ps
===

这是开始使用 PS 命令快速参考备忘单，可以帮助用户更高效地浏览网页

入门
----
## 查看 进程运行 时长

```bash
ps -eo pid,lstart,etime,cmd | grep mysql

ps -eo lstart 启动时间
ps -eo etime   运行多长时间.
```