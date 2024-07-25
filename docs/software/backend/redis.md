redis
===

## 查询

| Command                               | Description                                                 |
| ------------------------------------- | ----------------------------------------------------------- |
| `scan 0 match *pattern* count number` | 迭代数据库中的数据库键，产用于模糊搜索某 `key` ，非全量搜索 |
| `keys *pattern*`                      | 查询当前库指定 `key`                                        |
| `dbsize`                              | 当前数据库的 key 的数量。                                   |

# info
## memory 内存信息
| Command                               | Description                                                 |
| ------------------------------------- | ----------------------------------------------------------- |
| `used_memory`            | 内存总量，以字节（byte）为单位                                                                                                                                    |
| `used_memory_human`      | 内存总量，以人类可读的格式展示                                                                                                                                    |
| `used_memory_rss`        | 已分配的内存总量（常驻内存大小，单位为 byte ）。这个值和 top、ps 等命令的输出一致。                                                                               |
| `used_memory_rss_human`  | 与 used_memory_rss 相同，以人类可读的格式展示                                                                                                                     |
| `used_memory_peak`       | 内存消耗峰值（以字节为单位）                                                                                                                                      |
| `used_memory_peak_human` | used_memory_rss/used_memory 的比例。一般情况下，used_memory_rss 略高于 used_memory，当内存碎片较多时，则 mem_fragmentation_ratio 会较大，可以反映内存碎片是否很多 |



## Strings
--------------------

| Command                         | Description               |
| ------------------------------- | ------------------------- |
| `APPEND` keyvalue             | Append                    |
| `BITCOUNT` key [ start stop ] | Count #of set bits        |
| `BITOP AND` dest[src]+        | Bitwise AND               |
| `BITOP OR` dest[src]+         | Bitwise OR                |
| `BITOP XOR` dest[src]+        | Bitwise XOR               |
| `BITOP NOT` destsrc           | Bitwise NOT               |
| `BITPOS` keybit[startstop]    | Find first set bit           |
| `DECR` key                    | Decrement integer          |
| `DECRBY` keyby                | Subtract from integer       |
| `GET` key                     | Get by key                  |
| `GETBIT` keyoffset            | Get bit by index             |
| `GETRANGE` keystartend        | Get substring              |
| `GETSET` keyvalue             | Set,returning old value     |
| `INCR` key                    | Increment integer          |
| `INCRBY` keyby                | Add to integer              |
| `INCRBYFLOAT` keyby           | Add to float                |
| `MGET` [key]+                 | Get multiple               |
| `MSET` [keyvalue]+            | Set multiple               |
| `MSETNX` [keyvalue]+          | Set multiple if doesn’texist |
| `PSETEX` keymsvalue           | Set with expiry(ms)         |
| `SET` keyvalue                | Set                       |
| `SETBIT` keyoffsetvalue       | Set bit by index             |
| `SETEX` keysecsvalue          | Set with expiry(s)          |
| `SETNX` keyvalue              | Set if doesn’t exist         |
| `SETRANGE` keyoffsetvalue     | Set substring              |
| `STRLEN` key                  | Get length                 |
---
> _Strings can be used as numbers,arrays,bit sets and binary data_

## Databases
--------------------

| Command                                       | Description                         |
| --------------------------------------------- | ----------------------------------- |
| `DEL` [ key ]+                              | Delete item (s)                     |
| `DUMP` key                                  | Serialise item                      |
| `EXISTS` [ key ]+                           | Check for key                       |
| `EXPIRE` keys                               | Set timeout on item                 |
| `EXPIREAT` keyts                            | Set timeout by timestamp            |
| `KEYS` pattern                              | Get keys matching pattern           |
| `MIGRATE`                                   | Transfer item between instances     |
| `MOVE` keydb                                | Transfer item between databases     |
| `OBJECT`                                    | Inspect item                        |
| `PERSIST` key                               | Remove timeout                      |
| `PEXPIRE` keyms                             | Set timeout(ms)                     |
| `PEXPIREAT` keyts                           | Set timeout(timestamp)              |
| `PTTL` key                                  | Get item TTL(ms)                     |
| `RANDOMKEY`                                 | Get random key                      |
| `RENAME` key new                            | Change item’skey                    |
| `RENAMENX` keynew                           | Change key if new key doesn’t exist |
| `RESTORE` key                               | Deserialise                         |
| `SCAN` keycursor[MATCH pattern][countcount] | Iterate keys                        |
| `SORT`                                      | Get or store sorted copy            |
| `TTL` key                                   | Get item TTL (s)                    |
| `TYPE` key                                  | Get type of item                    |
---
- Times are specified in seconds(s) or milliseconds(ms)\*
- Timestamps(s) are specified as seconds since January1,1970\*


## Hashes
--------------------

| `Hashes`                                      |                            |
| ----------------------------------------------- | :------------------------- |
| `HDEL` key [ field ]+                         | Delete field(s)            |
| `HEXISTS` key field                            | Check for field             |
| `HGET` key field                               | Get item                    |
| `HGETALL` key                                 | Return all fields/values    |
| `HINCRBY` key field by                          | Add to integer value          |
| `HINCRBYFLOAT` key field by                     | Add to float value            |
| `HKEYS` key                                   | Return all fields           |
| `HLEN` key                                    | Get number of fields         |
| `HMGET` key[field] +                          | Get multiple items           |
| `HMSET` key[field value] +                     | Set multiple items           |
| `HSCAN` key cursor[MATCH pattern][countcount] | Iterate fields             |
| `HSET` key field value                          | Set field                  |
| `HSETNX` key field value                        | Set field if doesn’t exist |
| `HSTRLEN` key field                            | Get string length of field |
| `HVALS` key                                   | Return all values          |

## Sets
--------------------

| `Sets`                                        |                          |
| ----------------------------------------------- | :----------------------- |
| `SADD` key [ member ]+                        | [向集合添加一个或多个成员](https://www.runoob.com/redis/sets-sadd.html)     |
| `SCARD` key                                   | [获取集合的成员数](https://www.runoob.com/redis/sets-scard.html)           |
| `SDIFF` [key]+                                | [返回第一个集合与其他集合之间的差异](https://www.runoob.com/redis/sets-sdiff.html)          |
| `SDIFFSTORE` dest [key]+                      | Store difference         |
| `SINTER` [key]+                               | Intersection             |
| `SINTERSTORE` dest [key]+                     | Store intersection       |
| `SISMEMBER` keymember                         | Check for item           |
| `SMEMBERS` key                                | Get all                  |
| `SMOVE` srcdest member                        | Move item to another set |
| `SPOP` key[count]?                            | Pop random item          |
| `SRANDMEMBER` key[count]                      | Get random item          |
| `SREM` key[member]+                           | Remove matching          |
| `SSCAN key` cursor[MATCH pattern][countcount] | Iterate items            |
| `SUNION`[key]+                                | Union                    |
| `SUNIONSTORE` dest [key]+                     | Store union              |

## SortedSets
--------------------

| `SortedSets`                                                 |                                           |
| -------------------------------------------------------------- | :---------------------------------------- |
| `ZADD` key[options][score additem item] +                    | Add item                                  |
| `ZCARD` key                                                  | Get number of items                       |
| `ZCOUNT` key min max                                         | Number of items with score range          |
| `ZINCRBY` key incrmember                                     | Add to score                              |
| `ZINTERSTORE`                                                | Store intersection                        |
| `ZLEXCOUNT` key min max                                      | Lexicographical range count               |
| `ZRANGE` key start stop [WITHSCORES]                         | Get items within rank range               |
| `ZRANGEBYLEX` key min max[ LIMIT offset count]               | Get items within lexicographical range    |
| `ZRANGEBYSCORE` key min max [WITHSCORES][limit offset count] | Get items within score range              |
| `ZRANK` key member                                           | Get item rank                             |
| `ZREM` key [member]+                                         | Remove item(s)                            |
| `ZREMRANGEBYLEX` key min max                                 | Remove items within lexicographical range |
| `ZREMRANGEBYRANK` key start stop                             | Remove items within rank range            |
| `ZREMRANGEBYSCORE` key min max                               | Remove items within score range           |
| `ZREVRANGE`                                                  | ZRANGE inreverse order                    |
| `ZREVRANGEBYLEX`                                             | ZRANGEBYLEX inreverse order               |
| `ZREVRANGEBYSCORE`                                           | ZRANGEBYSCORE inreverse order             |
| `ZREVRANK`                                                   | ZRANK inreverse order                     |
| `ZSCAN` key cursor [MATCH pattern][count count]              | Iterate items                             |
| `ZSCORE` keymember                                           | Get item score                            |
| `ZUNIONSTORE` dest numkeys [ key ]+ [ WEIGHTS [ weight ]+ ] [ AGGREGATE SUM[MIN][MAX] ] | Store union  |

## Lists
--------------------
| `Lists`                                                 |                                           |
| ----------------------------------------------- | :--------------------------- |
| BLPOP [key]+timeout                         | Blocking left pop            |
| `BLPOP` [key]+timeout                         | Blocking left pop            |
| `BRPOP` [key]+timeout                         | Blocking right pop           |
| `BRPOPLPUSH` src dest timeout                 | Blocking rotate              |
| `LINDEX` key index                            | Access by index              |
| `LINSERT` key BEFORE[AFTER] pivot value       | Insert next to               |
| `LLEN` key                                    | Get length                   |
| `LPOP` key                                    | Pop from start               |
| `LPUSH` key[value]+                           | Push onto start              |
| `LPUSHX` key value                            | Push if list exists          |
| `LRANGE` key start stop                       | Access range                 |
| `LREM` key count value                        | Remove occurrences           |
| `LSET` key index value                        | Set item by index            |
| `LTRIM` list start stop                       | Removes tart/end items       |
| `RPOP` key                                    | Pop from end                 |
| `RPOPLPUSH` src dest                          | Rotate                       |
| `RPUSH` key[value]+                           | Push onto end                |
| `RPUSHX` key value                            | Push onto end if list exists |

## Client/Server
--------------------

| `Scripts`       |                                     |
| ----------------- | :---------------------------------- |
| `AUTH` password | Request authentication              |
| `ECHO` message  | Return message                      |
| `PING`          | Test connection                     |
| `QUIT`          | Close connection                    |
| `SELECT`  index      |  Set current database by index |

## Scripts
--------------------

| `Scripts`      |                     |
| ---------------- | :------------------ |
| `EVAL`         | Run                 |
| `EVALSHA`      | Run cached          |
| `SCRIPT EXISTS` | Check by hash       |
| `SCRIPT FLUSH`  | Clear cache         |
| `SCRIPT KILL`   | Kill running script |
| `SCRIPT LOAD`   | Add to cache        |


## see more
[Redis.Cheat.Sheet](https://github.com/Redsmin/redis-cheat-sheet/blob/master/Redis.Cheat.Sheet.pdf)