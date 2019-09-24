# Initial Installation

If you have completed the Odoo deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for Odoo

## Odoo Installation Wizard

1. Using local Chrome or Firefox to visit the URL *http://domain name* or *http://Internet IP*, you will enter the register interface of Odoo
 ![Odoo初始化页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-startcreatedb-websoft9.png)

2. 填写好所有参数，点击【create database】按钮，开始初始化安装。
   > 其中 Email 和 Password 是登录账号密码，务必牢记之

3. 初始化安装完成后，登录后台，安装所需的 APP
  ![Odoo APPS](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-consoleui-websoft9.png)

4. 注销登录，在登录界面点击【Manage Database】链接  
  ![Odoo manage database](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-loginpage-websoft9.png)

5. 点击【set a master password】给数据库设置一个主密码保护数据库（非常重要）
  ![Odoo set a pssword](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-setmasterpw-websoft9.png)

6. Odoo 支持多租户（多企业组织），点击【create database】，可以再增加一个企业组织
  ![Odoo APPS](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-multidb-websoft9.png)

7. 回到登录界面，发现会多一个 database 选项
  ![Odoo APPS](http://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-multidblogin-websoft9.png)

> More useful Odoo guide, please refer to [Odoo Documentation](https://www.odoo.com/documentation/master/index.html)

## Q&A

#### I can't visit the start page of Odoo?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Odoo use?

PostgreSQL

#### 勾选 Demo data了，以后还能删除这些数据吗？

You never use demo database for business
