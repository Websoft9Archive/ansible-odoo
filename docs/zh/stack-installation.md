# 初始化安装

在云服务器上部署 Odoo 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 Odoo，请先到 **域名控制台** 完成一个域名解析

## Odoo 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://Internet IP*, 进入初始化页面
   
   * 社区版

   ![Odoo 社区版初始化页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-startcreatedb-websoft9.png)

   * 企业版
   
   部署 Odoo 企业版后，需要根据镜像的引导页面向 Odoo 官方人员获取试用授权，便可以免费试用一个月。获取授权后，试用 SSH 登录云服务器，运行如下脚本解锁企业版
   ```
   bash /etc/odoo/ee_init.sh
   ```

2. 填写好所有参数，点击【create database】按钮，开始初始化安装。
   > 其中 Email 和 Password 是登录账号密码，务必牢记之

3. 初始化安装完成后，登录后台，安装所需的 APP
  ![Odoo APPS](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-consoleui-websoft9.png)

4. 注销登录，在登录界面点击【Manage Database】链接  
  ![Odoo manage database](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-loginpage-websoft9.png)

5. 点击【set a master password】给数据库设置一个主密码保护数据库（非常重要）
  ![Odoo set a pssword](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-setmasterpw-websoft9.png)

6. Odoo 支持多租户（多企业组织），点击【create database】，可以再增加一个企业组织
  ![Odoo 新增数据库](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-multidb-websoft9.png)

7. 回到登录界面，发现会多一个 database 选项
  ![Odoo 重新登录](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-multidblogin-websoft9.png)


> 需要了解更多Odoo的使用，请参考官方文档：[Odoo Documentation](https://www.odoo.com/documentation/master/index.html)

## 常见问题

#### 浏览器打开IP地址，无法访问 Odoo（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署包采用的哪个数据库来存储 Odoo 数据？

PostgreSQL

#### 勾选 Demo data了，以后还能删除这些数据吗？

官方并没有提供 Demo data 的删除工具，建议直接删除数据库，然后再新增（此时不再勾选 Demo data）
