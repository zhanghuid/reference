audit 审计框架
===
auditd 是 Linux 的内核审计框架，能够记录与安全相关的系统事件。通过 auditd 可以获取更多关于删除事件的详细信息。

## 监控删除目录事件
<!--rehype:body-class=cols-1-->
### 添加规则
```bash
sudo auditctl -w /tmp/agentLog.20240801 -p w -k delete-file-20240801

#   在 auditctl 命令中，-p 选项用于指定监控的权限类型，wa 是由两种权限类型组合而成的标志：
#   w (write): 监控对文件的写操作。任何对文件内容的写入（包括追加）都会触发审计事件。
#   a (attribute change): 监控文件属性的变化。例如，文件的所有者、权限、时间戳等发生变化时会触发审计事件。

```

### 按事件名称查询
```bash
sudo ausearch -k delete-file-20240801
```

### 搜索

#### 命令
```bash
sudo ausearch -f agent

# -f agent: -f 选项指定搜索文件路径或文件名，agent 是你要匹配的字符串。
```

#### 示例输出
```log
time->Tue Aug  9 12:34:56 2024
type=SYSCALL msg=audit(1628507696.123:4567): arch=c000003e syscall=87 success=yes exit=0 a0=ffffff9c a1=21b83e0 a2=0 a3=7ffdb42b5c10 items=1 ppid=12345 pid=6789 auid=1000 uid=1000 gid=1000 euid=1000 suid=1000 fsuid=1000 egid=1000 sgid=1000 fsgid=1000 tty=pts0 ses=1 comm="rm" exe="/bin/rm" key="delete-file"
type=CWD msg=audit(1628507696.123:4567):  cwd="/home/user"
type=PATH msg=audit(1628507696.123:4567): item=0 name="agentLog.20240801" inode=123456 dev=08:01 mode=0100644 ouid=1000 ogid=1000 rdev=00:00 nametype=DELETE
type=PROCTITLE msg=audit(1628507696.123:4567): proctitle=726D002F7661722F6C6F672F6167656E744C6F672E3230323430383031
```

#### 解释
- time: 事件发生的时间。
- syscall: 系统调用编号和相关信息。
- comm="rm": 触发事件的命令（如 rm 命令）。
- exe="/bin/rm": 执行命令的路径。
- name="agentLog.20240801": 涉及的文件名。
- pid=6789: 触发事件的进程 ID。
- key="delete-file": 设置审计规则时使用的关键字。


### 删除事件
```bash
sudo auditctl -d /tmp/agentLog.20240801 -p wa

#   -d：删除审计规则。
#  /tmp/agentLog.20240801：你之前监控的文件或目录。
#   -p wa：权限标志，表示删除对写操作和属性变化的监控。
```

## 删除全部审计
### 命令
```bash
sudo auditctl -D
```