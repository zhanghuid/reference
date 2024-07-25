phpbrew
===

## 基础用法

| 命令                    | 描述              |
| ----------------------- | ----------------- |
| `phpbrew known`         | 列出已知 PHP 版本 |
| `phpbrew use php-7.4.2` | 切换版本          |
<!--rehype:className=show-header code-nowrap-->


## 扩展安装
```bash
# 安装 zlib  
phpbrew ext install zlib

# 安装 xdebug 
phpbrew ext install xdebug stable

# 安装 iconv, 带自定义的 iconv 安装路径 
phpbrew ext install iconv --with-iconv=/usr/local/opt/libiconv
```

[see more](https://github.com/phpbrew/phpbrew/blob/master/README.cn.md)