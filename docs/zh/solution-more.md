# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

绑定域名的前置条件是：已经完成域名解析（一般是通过增加一个A记录指向服务器IP来实现解析操作） 

虽然如此，从服务器安全和后续维护考量，**域名绑定**步骤不可省却  

Odoo 域名绑定操作步骤：

1. 使用 WinSCP 登录云服务器
2. 修改 [Nginx虚拟机主机配置文件](/zh/stack-components.md#nginx)，将其中的 **server_name** 项的值 *_* 修改为你的域名
   ```text
   server {
      listen 80;
      server_name    _; # 改为自定义域名
   ...
   ```
3. 保存配置文件，[重启Nginx服务](/zh/admin-services.md#nginx)


## 其他

暂无
