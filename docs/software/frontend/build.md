前端构建工具备忘
===
简明手册

# 缓存

## npm

### 查看缓存路径
```bash
npm config get cache
```

### 清除缓存
```bash
npm cache clean --force
```

### 缓存验证
```bash
npm cache verify
```

## pnpm
### 查看缓存路径
```bash
pnpm store path
```

### 清除缓存
```bash
pnpm store prune
```

## yarn
### 查看缓存列表
```bash
yarn cache list
```

### 查看缓存路径
```bash
yarn cache dir
```

### 清除缓存
```bash
yarn cache clean
```

### 缓存验证
```bash
npm cache verify
```