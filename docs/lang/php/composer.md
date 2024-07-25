composer
===

emm... 其实 composer 的命令都是依赖 composer.phar 文件来的，使用 composer 命令，只不过是将其放到 `$PATH` 环境变量里

## Installing dependencies
    
| Command                      | Description                                                                                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `composer install`           | 优先使用依赖文件 `composer.lock` 去下载安装依赖库，如果 `composer.lock` 文件不存在，则会会根据 `composer.json` 去下载依赖库并安装，并且重新生成 `composer.lock` 文件 |
| `composer install --dry-run` | 模拟安装依赖                                                                                                                                                         |
<!--rehype:className=show-header code-nowrap-->
---
> 注意：<br/>
<pur>**composer.lock**</pur> `$1` 被提交到版本控制仓库里. 可追踪其在版本库中的状态.<br/>
如果发生修改, 你应该执行<pur>**composer install**</pur>，使重新构建你本地的依赖.

## Updating packages

| Command                               | Description                                                |
| ------------------------------------- | ---------------------------------------------------------- |
| `composer update`                     | Updates all packages                                       |
| `composer update --with-dependencies` | Updates all packages and its dependencies                  |
| `composer update vendor/package`      | Updates a certain `package` from `vendor`                  |
| `composer update vendor/*`            | Updates all packages from `vendor`                         |
| `composer update --lock`              | Updates `composer.lock` hash without updating any packages |
<!--rehype:className=show-header code-nowrap;&style=padding-bottom: 53px;-->
---
> This command changes only the <pur>**composer.lock**</pur> file.
<!--rehype:style=padding-top: 23px;-->



## Updating autoloader

| Command                    | Description                        |
| -------------------------- | ---------------------------------- |
| `composer dumpautoload -o` | Generates optimized autoload files |
<!--rehype:className=show-header code-nowrap-->


## Adding packages

| Command                                 | Description                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------- |
| `composer require vendor/package`.      | Adds `package` from `vendor` to composer.json's `require` section and installs it      |
| `composer require vendor/package --dev` | Adds `package` from `vendor` to composer.json's `require-dev` section and installs it. |
<!--rehype:className=show-header code-nowrap-->
---
> This command changes both the  <pur>**composer.json**</pur> and  <pur>**composer.lock**</pur> files.
<!--rehype:style=padding-top: 23px;-->
## Passing versions

| Command                                         | Description                              |
| ----------------------------------------------- | ---------------------------------------- |
| `composer require vendor/pkg "1.3.2"`           | Installs `1.3.2`                         |
| `composer require vendor/pkg ">=1.3.2"`         | Above or equal `1.3.2`                   |
| `composer require vendor/pkg "<1.3.2"`          | Below `1.3.2`                            |
| `composer require vendor/pkg "1.3.*"`           | Latest of `>=1.3.0 <1.4.0`               |
| `composer require vendor/pkg "~1.3.2"`          | Latest of `>=1.3.2 <1.4.0`               |
| `composer require vendor/pkg "~1.3"`            | Latest of `>=1.3.0 <2.0.0`               |
| `composer require vendor/pkg "^1.3.2"`          | Latest of `>=1.3.2 <2.0.0`               |
| `composer require vendor/pkg "^1.3"`            | Latest of `>=1.3.0 <2.0.0`               |
| `composer require vendor/pkg "^0.3.2"`          | Latest of `>=0.3.0 <0.4.0` (for pre-1.0) |
| `composer require vendor/pkg "dev-BRANCH_NAME"` | From the branch `BRANCH_NAME`            |
<!--rehype:className=show-header code-nowrap-->


## Removing packages

| Command                          | Description                                                   |
| -------------------------------- | ------------------------------------------------------------- |
| `composer remove vendor/package` | Removes `vendor/package` from composer.json and uninstalls it |
<!--rehype:className=show-header code-nowrap-->

---
<!--rehype:style=padding-top: 23px;-->
> This command changes both the  <pur>**composer.json**</pur> and  <pur>**composer.lock**</pur> files.
