ps
===

## 查看 进程运行 时长

```bash
ps -eo pid,lstart,etime,cmd | grep mysql

ps -eo lstart 启动时间
ps -eo etime   运行多长时间.
```