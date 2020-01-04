# 故障处理

此处收集使用 Odoo 过程中最常见的故障，供您参考

> 大部分故障与云平台密切相关，如果你可以确认故障的原因是云平台造成的，请参考[云平台文档](https://support.websoft9.com/docs/faq/zh/tech-instance.html)

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

#### 访问Odoo总是出现数据库设置提醒？

![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/odoo/odoo-setpasswodrem-websoft9.png)

这个提醒的是要求你尽快给数据库设置一个高强度的管理员密码，如果不设置将面临很大的风险。一旦设置后，此界面就不会再弹出了

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

#### 数据库服务无法启动

数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。  
建议先通过命令进行排查  

```shell
# 查看磁盘空间
df -lh

# 查看内存使用
free -lh
```
## 服务器类

服务器相关故障的诊断和解决，与云平台密切相关，请参考[云平台文档](https://support.websoft9.com/docs/faq/zh/tech-instance.html)
