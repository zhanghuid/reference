GIT
===

## 更改git已提交的user.email信息

<!--rehype:body-class=cols-1-->
### 操作步骤
>**1. 查看当前的提交信息**
```bash
# 列出 hash / 用户名 / 邮箱
git log --pretty=format:"%h %an %ae"
```

>**2. 使用如下 `shell`**

```bash
# 将 youroldemail@example.com 替换为步骤 1 的邮箱
# 将 yournewemail@example.com 替换为你的新邮箱

git filter-branch --env-filter '
OLD_EMAIL="youroldemail@example.com"
NEW_NAME="yournewname"
NEW_EMAIL="yournewemail@example.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
  export GIT_COMMITTER_NAME="$NEW_NAME"
  export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
  export GIT_AUTHOR_NAME="$NEW_NAME"
  export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

```

>**3. 覆盖远程**
```bash
git push origin --force --all
git push origin --force --tags
```

### 可能出现的问题
<!--rehype:style=background:#e91e63;-->
```bash
Cannot create a new backup.
A previous backup already exists in refs/original/
Force overwriting the backup with -f
```

> 解决方案
```
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch Rakefile' HEAD
```