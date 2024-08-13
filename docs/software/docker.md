docker
===
简明手册

## 从容器创建一个新的镜像
<!--rehype:body-class=cols-1-->
### docker commit example
```bash
# docker commit [-m="提交的描述信息"] [-a="创建者"] 容器名称|容器ID 生成的镜像名[:标签名]
docker commit \ 
-m "添加构建内容" \
-a "huid" \
a2bc927c522d231fd0f9381286d2f \
"hub.docker.com/cheatsheets/jekyll/1.1"
```


### 查看正在运行的容器
```bash
docker ps
```

### 查看停止的容器
```bash
docker ps -f status=exited
```

### 查看所有容器（包括运行和停止）
```bash
docker ps -a
```

### 命名容器
```bash
docker run --name my-nginx -d nginx:latest
```

### 映射端口
```bash
# -p 主机端口:容器端口
docker run -p 80:80 -d nginx:latest
```

### 挂载目录
```bash
# -v 主机目录:容器目录
docker run -v /data:/data -d nginx:latest
```

### 运行容器的 bash
```bash
docker run -it nginx:latest /bin/bash
```
