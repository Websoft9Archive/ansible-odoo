# Troubleshooting

We collect the most common troubleshooting of using Odoo for your reference:

## Odoo related

#### 恢复数据库、上传附件等操作，出现 “413 Request Entity Too Large” 错误？

这是由于 Nginx 默认安装下，上传文件最大为 1M，因此需要修改 Nginx 这个限制：
1. 使用 WinSCP 远程连接服务器
2. 编辑 [Nginx 虚拟机主机配置文件](/zh/stack-components.md#nginx)
3. 插入一行 `client_max_body_size 0;` 解除上传文件限制的配置项
   ```
   server {
    listen 80;
    server_name _;
    client_max_body_size 0; #解除上传文件限制
    ...
   ```
4. 保存并[重启 Nginx 服务](/zh/admin-services.md#nginx)

#### 无法通过 SFTP 上传文件到Odoo程序目录问题

由于部分 Ubuntu系统 默认创建了默认用户名 ubuntu ,ubuntu为普通用户没有对odoo程序的源码或目录有操作的权限,需要执行一下命令:

```
sudo chmod o+rw  /usr/lib/python2.x/dist-packages/odoo   # odoo10版本
sudo chmod o+rw  /usr/lib/python3/dist-packages/odoo   # odoo11版本以上
```

#### PDF无法打印中文

Odoo11之前的版本，在使用Odoo打印功能时，下载的PDF文件只有英文，没有中文，导致打印不完整。

**问题原因**：系统环境里没有下载所需的中文字体

**解决方案**：执行以下命令下载字体

~~~
sudo apt-get install ttf-wqy-zenhei
sudo apt-get install ttf-wqy-microhei
~~~


## Database related

#### Database service could not be started?

Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started  

It is recommended to first check through the command.

```shell
# restart mysql service
systemctl restart mysql

# view disk space
df -lh

# view memory rate
free -lh
```
## Server related

Cloud Server troubleshooting is closely related to the Instance provider that is Cloud Platform   
Please refer to [Cloud Platform Documentation](https://support.websoft9.com/docs/faq/tech-instance.html)