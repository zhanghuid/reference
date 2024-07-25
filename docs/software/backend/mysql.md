mysql
===

# DDL -- 数据定义语言

## DDL
<!--rehype:body-class=cols-1-->
### 新增
```sql
CREATE DATABASE DatabaseName;
CREATE DATABASE DatabaseName CHARACTER SET utf8;
```

### 切换
```sql
USE DatabaseName;
```

### 删除
```sql
DROP DATABASE DatabaseName;
```

### 修改
```sql
ALTER DATABASE DatabaseName CHARACTER SET utf8;
```

# DQL -- 数据查询语言
## DQL
<!--rehype:body-class=cols-1-->
### 查询
```sql
SELECT * FROM table;
SELECT * FROM table1, table2;
SELECT field1, field2 FROM table1, table2;
SELECT ... FROM ... WHERE condition
SELECT ... FROM ... WHERE condition GROUPBY field;
SELECT ... FROM ... WHERE condition GROUPBY field HAVING condition2;
SELECT ... FROM ... WHERE condition ORDER BY field1, field2;
SELECT ... FROM ... WHERE condition ORDER BY field1, field2 DESC;
SELECT ... FROM ... WHERE condition LIMIT 10;
SELECT DISTINCT field1 FROM ...
SELECT DISTINCT field1, field2 FROM ...
```

<!--rehype:body-class=cols-1-->
### 关联查询
```sql
SELECT ... FROM t1 JOIN t2 ON t1.id1 = t2.id2 WHERE condition;
SELECT ... FROM t1 LEFT JOIN t2 ON t1.id1 = t2.id2 WHERE condition;
SELECT ... FROM t1 JOIN (t2 JOIN t3 ON ...) ON ...
```

<!--rehype:body-class=cols-1-->
### 条件
```sql
field1 = value1
field1 <> value1
field1 LIKE 'value _ %'
field1 IS NULL
field1 IS NOT NULL
field1 IS IN (value1, value2)
field1 IS NOT IN (value1, value2)
condition1 AND condition2
condition1 OR condition2
```

# DML -- 数据操作语言

## DML
<!--rehype:body-class=cols-1-->
### 新增
```sql
INSERT INTO table1 (field1, field2) VALUES (value1, value2);
```

<!--rehype:body-class=cols-1-->
### 删除
```sql
DELETE FROM table1 / TRUNCATE table1
DELETE FROM table1 WHERE condition
DELETE FROM table1, table2 FROM table1, table2 WHERE table1.id1 =
  table2.id2 AND condition
```

<!--rehype:body-class=cols-1-->
### 更新
```sql
UPDATE table1 SET field1=new_value1 WHERE condition;
UPDATE table1, table2 SET field1=new_value1, field2=new_value2, ... WHERE
  table1.id1 = table2.id2 AND condition;
```

## Create
<!--rehype:body-class=cols-1-->
### example 1
```sql
CREATE TABLE table (field1 type1, field2 type2);
CREATE TABLE table (field1 type1, field2 type2, INDEX (field));
CREATE TABLE table (field1 type1, field2 type2, PRIMARY KEY (field1));
CREATE TABLE table (field1 type1, field2 type2, PRIMARY KEY (field1,field2));
```

### example 2
```sql
CREATE TABLE table1 (fk_field1 type1, field2 type2, ...,
  FOREIGN KEY (fk_field1) REFERENCES table2 (t2_fieldA))
    [ON UPDATE|ON DELETE] [CASCADE|SET NULL]
```

### example 3
```sql
CREATE TABLE table1 (fk_field1 type1, fk_field2 type2, ...,
 FOREIGN KEY (fk_field1, fk_field2) REFERENCES table2 (t2_fieldA, t2_fieldB))
```

### example 4
```sql
CREATE TABLE table IF NOT EXISTS;
```

### example 5
```sql
CREATE TEMPORARY TABLE table;
```

<!--rehype:body-class=cols-1-->
### 删除表
```sql
DROP TABLE table;
DROP TABLE IF EXISTS table;
DROP TABLE table1, table2, ...
```

### 更新表字段

```sql
ALTER TABLE table MODIFY field1 type1
ALTER TABLE table MODIFY field1 type1 NOT NULL ...
ALTER TABLE table CHANGE old_name_field1 new_name_field1 type1
ALTER TABLE table CHANGE old_name_field1 new_name_field1 type1 NOT NULL ...
ALTER TABLE table ALTER field1 SET DEFAULT ...
ALTER TABLE table ALTER field1 DROP DEFAULT
ALTER TABLE table ADD new_name_field1 type1
ALTER TABLE table ADD new_name_field1 type1 FIRST
ALTER TABLE table ADD new_name_field1 type1 AFTER another_field
ALTER TABLE table DROP field1
ALTER TABLE table ADD INDEX (field);
```

<!--rehype:body-class=cols-1-->
### 更改表字段顺序
```sql
ALTER TABLE table MODIFY field1 type1 FIRST
ALTER TABLE table MODIFY field1 type1 AFTER another_field
ALTER TABLE table CHANGE old_name_field1 new_name_field1 type1 FIRST
ALTER TABLE table CHANGE old_name_field1 new_name_field1 type1 AFTER
  another_field
```

<!--rehype:body-class=cols-1-->
### 新增索引
```sql
CREATE TABLE table (..., PRIMARY KEY (field1, field2))
CREATE TABLE table (..., FOREIGN KEY (field1, field2) REFERENCES table2
(t2_field1, t2_field2))
```

# DCL -- 数据控制语言

## 用户 & 权限
<!--rehype:body-class=cols-1-->
### 创建用户
```sql
CREATE USER 'user'@'localhost';
```

### 删除用户

```sql
DROP USER 'user'@'host';
```

### 授权
```sql
GRANT ALL PRIVILEGES ON base.* TO 'user'@'localhost' IDENTIFIED BY 'password';
GRANT SELECT, INSERT, DELETE ON base.* TO 'user'@'localhost' IDENTIFIED BY 'password';
FLUSH PRIVILEGES
```

### 回收权限
```sql
REVOKE ALL PRIVILEGES ON base.* FROM 'user'@'host'; -- one permission only
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user'@'host'; -- all permissions
FLUSH PRIVILEGES
```


<!--rehype:body-class=cols-1-->
### 重置密码
```sql
SET PASSWORD = PASSWORD('new_pass');
SET PASSWORD FOR 'user'@'host' = PASSWORD('new_pass');
SET PASSWORD = OLD_PASSWORD('new_pass');
```


Host ‘%’ indicates any host.

## 数据类型
<!--rehype:body-class=cols-1-->
### 主要的字段类型

```sql
TINYINT (1o: -217+128)
SMALLINT (2o: +-65 000)
MEDIUMINT (3o: +-16 000 000)
INT (4o: +- 2 000 000 000)
BIGINT (8o: +-9.10^18)
```

```sql
Precise interval: -(2^(8*N-1)) -> (2^8*N)-1
```

⚠ INT(2) = "2 digits displayed" -- NOT "number with 2 digits max"

```sql
FLOAT(M,D)
DOUBLE(M,D)
FLOAT(D=0->53)
```

⚠ 8,3 -> 12345,678 -- NOT 12345678,123!

```sql
TIME (HH:MM)
YEAR (AAAA)
DATE (AAAA-MM-JJ)
DATETIME (AAAA-MM-JJ HH:MM; années 1000->9999)
TIMESTAMP (like DATETIME, but 1970->2038, compatible with Unix)
```

```sql
VARCHAR (single-line; explicit size)
TEXT (multi-lines; max size=65535)
BLOB (binary; max size=65535)
```

Variants for TEXT&BLOB: `TINY` (max=255), `MEDIUM` (max=~16000), and `LONG` (max=4Go). Ex: `VARCHAR(32)`, `TINYTEXT`, `LONGBLOB`, `MEDIUMTEXT`

```sql
ENUM ('value1', 'value2', ...) -- (default NULL, or '' if NOT NULL)
```

## explain Extra 字段
<!--rehype:body-class=cols-1-->
### Using where
```
Extra为Using where说明，SQL使用了where条件过滤数据
```

常见的优化方法为，在where过滤属性上添加索引。

### Using index
```
Extra为Using index说明，SQL所需要返回的所有列数据均在一棵索引树上，而无需访问实际的行记录。
```

这类SQL语句往往性能较好。

### Using index condition
```
Extra为Using index condition说明，确实命中了索引，但不是所有的列数据都在索引树上，还需要访问实际的行记录。
```

这类SQL语句性能也较高，但不如Using index。

### Using filesort
```
Extra为Using filesort说明，得到所需结果集，需要对所有记录进行文件排序。
```

这类SQL语句性能极差，需要进行优化。

### Using temporary
```
Extra为Using temporary说明，需要建立临时表(temporary table)来暂存中间结果。
```

这类SQL语句性能较低，往往也需要进行优化。


### Using join buffer (Block Nested Loop)
```
Extra为Using join buffer (Block Nested Loop)说明，需要进行嵌套循环计算。
```

这类SQL语句性能往往也较低，需要进行优化。

---
> [see more](https://juejin.cn/post/6969120307814596645)


## 内置工具
<!--rehype:body-class=cols-1-->
### 备份数据库文件

```bash
mysqldump -u Username -p dbNameYouWant > databasename_backup.sql
```

### 从 sql 文件恢复

```bash
mysql - u Username -p dbNameYouWant < databasename_backup.sql;
```

### Repair Tables After Unclean Shutdown

```bash
mysqlcheck --all-databases;
mysqlcheck --all-databases --fast;
```

### 重置 root 密码

```bash
$ /etc/init.d/mysql stop
```

```bash
$ mysqld_safe --skip-grant-tables
```

```bash
$ mysql # on another terminal
mysql> UPDATE mysql.user SET password=PASSWORD('new_pass') WHERE user='root';
```

```bash
## Switch back to the mysqld_safe terminal and kill the process using Control + \
$ /etc/init.d/mysql start
```

## 备忘
<!--rehype:body-class=cols-1-->
### sql
```bash
SHOW DATABASES;
SHOW TABLES;
SHOW FIELDS FROM table / DESCRIBE table;
SHOW CREATE TABLE table;
SHOW PROCESSLIST;
KILL process_number;
select user,host from mysql.user; // 查看用户
```