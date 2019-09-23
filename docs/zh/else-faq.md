# FAQ

#### Odoo支持多语言吗？

支持多语言（包含中文），系统默认根据浏览器自动选择语言 

#### Odoo数据库连接配置信息在哪里？

数据库配置信息在Odoo安装目录下的 *metabase.conf* 中，[查阅安装目录路径](/zh/stack-components.md#metabase)

#### 如果没有域名是否可以部署 Odoo？

可以，访问`http://服务器公网IP` 即可

#### 数据库 root 用户对应的密码是多少？

密码存放在服务器相关文件中：`/credentials/password.txt`

#### 是否有可视化的数据库管理工具？

有，内置phpMyAdmin，访问地址：http://服务器公网IP:9090

#### 如何禁止phpMyAdmin访问？

关闭服务器安全组的9090端口即可禁止

#### 是否可以修改Odoo的源码路径？

可以，通过修改 [Nginx 虚拟主机配置文件](/zh/stack-components.md)中相关参数

#### 如何修改上传的文件权限?

```shell
chown -R nginx.nginx /data/wwwroot/metabase
find /data/wwwroot/metabase -type d -exec chmod 750 {} \;
find /data/wwwroot/metabase -type f -exec chmod 640 {} \;
```
#### 部署和安装有什么区别？

部署是将一序列软件按照不同顺序，先后安装并配置到服务器的过程，是一个复杂的系统工程。  
安装是将单一的软件拷贝到服务器之后，启动安装向导完成初始化配置的过程。  
安装相对于部署来说更简单一些。 

#### 云平台是什么意思？

云平台指提供云计算服务的平台厂家，例如：Azure,AWS,阿里云,华为云,腾讯云等

#### 实例，云服务器，虚拟机，ECS，EC2，CVM，VM有什么区别？

没有区别，只是不同厂家所采用的专业术语，实际上都是云服务器