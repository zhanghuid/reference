linux - dd 命令
===

## TEST Disk WRITE Speed

<!--rehype:body-class=cols-1-->
### 命令
```bash
sync; dd if=/dev/zero of=tempfile bs=1M count=1024; sync

# 1024+0 records in
# 1024+0 records out
# 1073741824 bytes (1.1 GB) copied, 3.28696 s, 327 MB/s
```

### 解释
#### 1.	sync
<!--rehype:style=text-align: left;font-weight:bold;font-size:18px-->
- 解释:
  - sync 命令用于刷新文件系统缓冲区，将所有未写入磁盘的文件系统缓存数据写入磁盘。
- 作用: 
  - 确保在执行 dd 命令之前，所有缓存的数据已经安全地写入磁盘，防止数据丢失。
#### 2.	dd if=/dev/zero of=tempfile bs=1M count=1024
<!--rehype:style=text-align: left;font-weight:bold;font-size:18px-->

- 解释:
  - dd 是一个用于转换和复制文件的命令。
  - if=/dev/zero 表示输入文件是 /dev/zero，这是一个特殊文件，它会无限生成零字节。
  - of=tempfile 表示输出文件是 tempfile。
  - bs=1M 表示读写的块大小为1兆字节。
  - count=1024 表示复制1024个块。
- 作用: 
  - 这个命令从 /dev/zero 生成一个大小为 1GB (1024 x 1MB) 的文件 tempfile，其中所有的字节都是零。
#### 3.	sync
<!--rehype:style=text-align: left;font-weight:bold;font-size:18px-->

- 解释: 
  - 再次调用 sync 命令。
- 作用: 
  - 确保所有由 dd 命令创建的文件数据都写入磁盘，保证数据的完整性。

## TEST Disk READ Speed
<!--rehype:body-class=cols-1-->
### 命令
```bash
dd if=tempfile of=/dev/null bs=1M count=1024

# 1024+0 records in
# 1024+0 records out
# 1073741824 bytes (1.1 GB) copied, 0.159273 s, 6.7 GB/s
```

### 解释
#### 1.	dd if=tempfile
<!--rehype:style=text-align: left;font-weight:bold;font-size:18px-->

- 解释: 
  - dd 命令用于转换和复制文件。
- 参数:
  - if=tempfile 表示输入文件是 tempfile。
  - 作用: 从 tempfile 文件读取数据。

#### 2.	of=/dev/null
<!--rehype:style=text-align: left;font-weight:bold;font-size:18px-->

- 解释: 
  - of 参数指定输出文件。
- 参数:
  - of=/dev/null 表示将数据写入 /dev/null。
  - 作用: /dev/null 是一个特殊设备文件，所有写入它的数据都会被丢弃。因此，这个命令实际上只是读取数据而不保存。
 
#### 3.	bs=1M
<!--rehype:style=text-align: left;font-weight:bold;font-size:18px-->

- 解释: 
  - bs 参数指定读写操作的块大小。
- 参数:
  - bs=1M 表示每次读写操作的块大小为1兆字节。
  - 作用: 设置较大的块大小可以提高读写大文件的效率。

#### 4.	count=1024
<!--rehype:style=text-align: left;font-weight:bold;font-size:18px-->

- 解释: 
  - count 参数指定要读取的块数。
- 参数:
  - count=1024 表示读取1024个块。
  - 作用: 读取1024个1MB的块，总共读取1GB的数据。

引用
---
[1. disk-speed-test-read-write-hdd-ssd-perfomance-linux](https://www.shellhacks.com/disk-speed-test-read-write-hdd-ssd-perfomance-linux/)